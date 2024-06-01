const db = require('./connection');
const { Student, Tutor, Subject, TutoringSession } = require('../models');
const cleanDB = require('./cleanDB');

const students = [
  { name: 'John Doe', email: 'johndoe@example.com', dateOfBirth: new Date(), password: 'password' },
  { name: 'Jane Doe', email: 'janedoe@example.com', dateOfBirth: new Date(), password: 'password' },
];


const subjects = await Subject.find({ name: { $in: ['Math', 'Science', 'English', 'History'] } }); // Get the subjects from the database
const tutorSubjects = subjects.map(subject => subject._id); // Convert the subjects to an array of ObjectIds

const tutors = [
  { name: 'Mr. Smith', email: 'rsmith@example.com', subjects: tutorSubjects.filter(subjectId => ['Math', 'Science'].includes(subjects.find(subject => subject._id.equals(subjectId)).name)), user: userId },
  { name: 'Ms. Johnson', email: 'sjohnson@example.com', subjects: tutorSubjects.filter(subjectId => ['English', 'History'].includes(subjects.find(subject => subject._id.equals(subjectId)).name)), user: userId },
];

const tutoringSessions = [
  { tutor: 'Mr. Smith', student: 'John Doe', subject: 'Math' },
  { tutor: 'Ms. Johnson', student: 'Jane Doe', subject: 'English' },
];

async function seedDatabase() {
  for (const student of students) {
    const existingStudent = await Student.findOne({ email: student.email });
    if (!existingStudent) {
      await Student.create(student);
    }
  }
  for (const tutor of tutors) {
    const existingTutor = await Tutor.findOne({ email: tutor.email });
    if (!existingTutor) {
      await Tutor.create(tutor);
    }
  }
  for (const subject of subjects) {
    const existingSubject = await Subject.findOne({ name: subject.name });
    if (!existingSubject) {
      await Subject.create(subject);
    }
  }
  for (const session of tutoringSessions) {
    const existingSession = await TutoringSession.findOne({ tutor: session.tutor, student: session.student, subject: session.subject });
    if (!existingSession) {
      await TutoringSession.create(session);
    }
  }
}

seedDatabase().then(() => {
  console.log('Database seeded successfully!');
  db.close(); // Use the `db` variable instead of `mongoose`
}).catch((err) => {
  console.error('Error seeding database:', err);
  db.close(); // Use the `db` variable instead of `mongoose`
});