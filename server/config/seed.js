const db = require('./connection');
const { Student, Tutor, Subject, TutoringSession } = require('../models');
const cleanDB = require('./cleanDB');

const students = [
  { name: 'John Doe', email: 'johndoe@example.com', dateOfBirth: new Date(), password: 'password' },
  { name: 'Jane Doe', email: 'janedoe@example.com', dateOfBirth: new Date(), password: 'password' },
];

const subjects = [
  { name: 'Math' },
  { name: 'Science' },
  { name: 'English' },
  { name: 'History' },
];

const tutoringSessions = [
  { tutor: 'Mr. Smith', student: 'John Doe', subject: 'Math' },
  { tutor: 'Ms. Johnson', student: 'Jane Doe', subject: 'English' },
];

async function seedDatabase() {
  // Create students first
  for (const student of students) {
    const existingStudent = await Student.findOne({ email: student.email });
    if (!existingStudent) {
      const createdStudent = await Student.create(student);
      // Assign the _id property of the created student to the user property of the tutor object
      const tutor = tutors.find(tutor => tutor.name === 'Mr. Smith');
      if (tutor) {
        tutor.user = createdStudent._id;
      }
    }
  }

  // Then, create tutors with the defined user property
  const tutors = [
    {
      name: 'Mr. Smith',
      email: 'rsmith@example.com',
      subjects: subjects.filter(subject => ['Math', 'Science'].includes(subject.name)).map(subject => subject._id),
      user: null  // Initialize the user property with null
    },
    {
      name: 'Ms. Johnson',
      email: 'sjohnson@example.com',
      subjects: subjects.filter(subject => ['English', 'History'].includes(subject.name)).map(subject => subject._id),
      user: null  // Initialize the user property with null
    },
  ];


  // Seed subjects
  for (const subject of subjects) {
    const existingSubject = await Subject.findOne({ name: subject.name });
    if (!existingSubject) {
      await Subject.create(subject);
    }
  }

  // Seed tutors
  for (const tutor of tutors) {
    const existingTutor = await Tutor.findOne({ email: tutor.email });
    if (!existingTutor) {
      const tutorSubjects = await Subject.find({ name: { $in: tutor.subjects } });
      const tutorSubjectIds = tutorSubjects.map(subject => subject._id);
      await Tutor.create({...tutor, subjects: tutorSubjectIds });
    }
  }

  // Seed tutoring sessions
  for (const session of tutoringSessions) {
    const existingSession = await TutoringSession.findOne({ tutor: session.tutor, student: session.student, subject: session.subject });
    if (!existingSession) {
      const tutor = await Tutor.findOne({ name: session.tutor });
      const student = await Student.findOne({ name: session.student });
      const subject = await Subject.findOne({ name: session.subject });
      await TutoringSession.create({ tutor: tutor._id, student: student._id, subject: subject._id });
    }
  }
}

seedDatabase().then(() => {
  console.log('Database seeded successfully!');
  db.close(); 
}).catch((err) => {
  console.error('Error seeding database:', err);
  db.close(); 
});

module.exports = subjects;