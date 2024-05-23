const {User,Tutor}= require('../models');
const {signToken,AuthenicationError}= require

const stripe = require('stripe')

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
        };

        Mutation: {
            createUser: async (_, { email, password }) => {
                const user = new User ({email, password});
                await user.save();
                return user;
            }
        }

        module.exports = resolvers;



