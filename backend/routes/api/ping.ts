import Router from "koa-router";

const pingRouter = new Router();

pingRouter.get("/api/ping", async (ctx) => {
  ctx.status = 200;
  ctx.body = { message: "Server reponded." };
});

export default pingRouter;
