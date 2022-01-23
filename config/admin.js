module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0751f240ff684f3bb0bdca65f6142f6'),
  },
});
