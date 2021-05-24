"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  registerPurchase: async (ctx) => {
    try {
      const user = ctx.state.user;
      const customer = await strapi.services.cliente.findOne({
        usuario: user.id,
      });
      const { cantidad, producto, total } =
        ctx.request.body.input || ctx.request.body;
      console.log("cantidad", customer.id);
      console.log("producto", producto);
      console.log("total", total);

      const detalleCompra = await strapi.services["compra-detalle"].create({
        cliente: customer.id,
        producto,
        cantidad,
        total,
      });
      return detalleCompra;
    } catch (error) {
      console.log("error", error);
    }
  },
};
