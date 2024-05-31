const db = require('./connection');
const { Student, Tutor, Subject, TutoringSession } = require('../models');
const cleanDB = require('./cleanDB');

const students = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Jane Doe', email: 'janedoe@example.com' },
    ];

    const tutors = [
        { name: 'Mr. Smith', email: 'rsmith@example.com', subjects: ['Math', 'Science'] },
        { name: 'Ms. Johnson', email: 'sjohnson@example.com', subjects: ['English', 'History'] },
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
                await Student.insertMany(students);
                await Tutor.insertMany(tutors);
                await Subject.insertMany(subjects);
                await TutoringSession.insertMany(tutoringSessions);
              }
              
              seedDatabase().then(() => {
                console.log('Database seeded successfully!');
                mongoose.connection.close();
              }).catch((err) => {
                console.error('Error seeding database:', err);
                mongoose.connection.close();
              });