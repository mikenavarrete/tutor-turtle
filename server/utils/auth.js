const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY;


module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        try {
            const decoded = jwt.verify(token, 'secret-key');
            req.user = decoded.user;
            } catch (err) {
                throw new GraphQLError('Not authorized', {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                        },
                    });
                }       
            },
        };
        jwt.verify(token, jwtSecretKey);