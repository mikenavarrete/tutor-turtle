const Tutor = require('../models/Tutor');
const Student = require('../models/Student')
const subjects = require('../models/subjects')

const tutors = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        bio: 'Experienced math tutor with 5+ years of experience.',
        subjects: ['Math', 'Science'],
        availability: [
          { day: 'Monday', startTime: '10:00 AM', endTime: '2:00 PM' },
          { day: 'Wednesday', startTime: '2:00 PM', endTime: '6:00 PM' },
        ],  
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password123',
        bio: 'Experienced English tutor with 3+ years of experience.',
        subjects: ['English', 'History'],
        availability: [
          { day: 'Tuesday', startTime: '10:00 AM', endTime: '2:00 PM' },
          { day: 'Thursday', startTime: '2:00 PM', endTime: '6:00 PM' },  
        ],
    },
];
//Defined the subjects
const subjects = [
  { name: 'Math' },
  { name: 'Science' },
  { name: 'English' },
  { name: 'History' },
];
//function that creates a user and tutor 
async function createTutor(tutor) {
  const user = new user({
    email:tutor.email,
    password:tutor.password,
  });
  await user.save();

  const tutorDoc = new Tutor ({
    firstName: tutor.firstName,
    lastName: tutor.lastName,
    bio: tutor.bio,
    subjects: tutor.subjects.map((subject) => ({name: subject})),
    availability: tutor.availability,
    user: user._id,
  });
  await tutorDoc.save();
}
//creates the tutors
for (const tutor of tutors) {
  await createTutor(tutor);
}
//creates a new subject
const mathSubject = new Subject({name: 'Math',description: 'Mathmatics'});
mathSubject.save((err, subject) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Created subject: ${subject.name}`);
  }
});
// Find all subjects
Subject.find().then((subjects) => {
  console.log(`Found ${subjects.length} subjects:`);
  subjects.forEach((subject) => {
    console.log(` - ${subject.name}`);
  });
});
// Update a subject
Subject.findOneAndUpdate({name: 'Math'}, {description:'Mathmatics'},(err, subject) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Updated subject: ${subject.name}`);
  }
  });
//Delete a subject
  Subject.findOneAndRemove({name: 'Math'}, (err) => {
    if (err) {
      console.error(err);
      } else {
        console.log('Deleted subject: Math');
      }
  });


runSeeds();