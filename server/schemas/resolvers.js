const { User, Tutor } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('');

const resolvers = {
  Query: {
    user: async (_, { id }, { currentUser }) => {
      if (!currentUser) {
        throw new AuthenticationError(
          'You must be logged in to view this user.'
        );
      }
      const user = await User.findById(id);
      if (!user) {
        throw new Error('No user found with that ID.');
      }

      return user;
    },
    tutor: async (_, { id }, { currentUser }) => {
      if (!currentUser) {
        throw new AuthenticationError(
          'You must be logged in to view this user.'
        );
      }

      const tutor = await Tutor.findById(id);
      if (!tutor) {
        throw new Error('No tutor found with that ID.');
      }
      return tutor;
    },
  },
  Mutation: {
    createUser: async (_, { email, password }, { currentUser }) => {
      if (currentUser) {
        throw new AuthenticationError('You are already logged in.');
      }

      const user = await User.create({ email, password });
      const token = signToken(user);

      return { token, user };
    },
    createTutor: async (_, { name, email, password, hourlyRate }, { currentUser }) => {
      if (currentUser) {
        throw new AuthenticationError('You are already logged in.');
      }
      const tutor = await Tutor.create({ name, email, password, hourlyRate });
      const token = signToken(tutor);
      return { token, tutor };
    },
  },
};

module.exports = resolvers;