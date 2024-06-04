const { Student, subjects, Tutor, TutoringSessions } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PLZKMRxqQQc7oycymyLITMHTlNWZsSft4k5O4T8kAKLqHHes9l9E6Pj3kwmplLGEAVILrCj2aRfdeUkWjQznHmu00nIAeEFtU');

const resolvers = {
  Query: {
    students: async () => {
      return Student.find({});
    },
    subjects: async () => {
      return subjects.find({});
    },
    tutors: async () => {
      return Tutor.find({}).populate('subjects');
    },
    tutoringSessions: async () => {
      return TutoringSessions.find({}).populate('student').populate('subject').populate('tutor').exec();
    },
  },
  Mutation: {
    addStudent: async (parent, { name, email }) => {
      const newStudent = new Student({ name, email });
      return newStudent.save();
    },
    addTutor: async (parent, { name, email, subjects }) => {
      const newTutor = new Tutor({ name, email, subjects });
      return newTutor.save();
    },
    addSubject: async (parent, { name }) => {
      const newSubject = new subjects({ name });
      return newSubject.save();
    },
    addTutoringSession: async (parent, { tutorId, studentId, subject }) => {
      const newSession = new TutoringSessions({ tutor: tutorId, student: studentId, subject });
      return newSession.save();
    },
    createCheckoutSession: async (parent, { line_items }) => {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/`,
      });
      return { session: session.id };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;