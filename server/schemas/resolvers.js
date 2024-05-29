const { User, Tutor } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PLZKMRxqQQc7oycymyLITMHTlNWZsSft4k5O4T8kAKLqHHes9l9E6Pj3kwmplLGEAVILrCj2aRfdeUkWjQznHmu00nIAeEFtU');

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

      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });

      user.stripeCustomerId = customer.id;
      await user.save();

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
    login: async (_, { email, password }, { currentUser }) => {
      if (currentUser) {
        throw new AuthenticationError('You are already logged in.');
        }
        const valid = await user.comparePassword(password);
        if (!valid) {
          throw new AuthenticationError('Invalid credentials.');
          }
          const token = signToken(user);
          return { token, user };
    },
  },
};
createPaymentMethod: async (_, {paymentMethod}, {currentUser}) => {
  if (!currentUser) {
    throw new AuthenticationError('You must be logged in to create a payment method.');
  }
  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: paymentMethod.number,
      exp_month: paymentMethod.exp_month,
      exp_year: paymentMethod.exp_year,
      cvc: paymentMethod.cvc,
      },
  });

  const customer = await stripe.customers.retrieve(currentUser.stripeCustomerId);
  await stripe.paymentMethods.attach(paymentMethod.id, { customer: customer.id,     
});
currentUser.paymentMethodId = paymentMethod.id;
await currentUser.save();
return { paymentMethod };
};

makePayment: async (_, {amount}, {currentUser}) => {
  if (!currentUser) {
    throw new AuthenticationError('You must be logged in to make a payment.');
    }
    const customer = await stripe.customers.retrieve(currentUser.stripeCustomerId);
    
    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: 'usd',
      customer: customer.id,
      payment_method: currentUser.paymentMethodId,
      off_session: false,
      confirm:true,
    });

    currentUser.paymentStatus = 'paid';
    await currentUser.save();
    
    return { charge };
  },

module.exports = resolvers;