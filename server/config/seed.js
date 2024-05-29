const Tutor = require('../models/Tutor');
const Student = require('../models/Student')

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