module.exports = (strapi) => {
  return {
    // can also be async
    initialize() {
      strapi.app.use(async (ctx, next) => {
        const authorizationHeader = ctx.request.header.authorization;
        if (authorizationHeader === "null") {
          delete ctx.request.header.authorization;
        }
        await next();
      });
    },
  };
};
