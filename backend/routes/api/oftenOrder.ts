import Router from "koa-router";
import { all } from "../../utils/database";

const oftenOrderRouter = new Router();

oftenOrderRouter.get("/api/often-order", async (ctx) => {
  const foods = await all("SELECT * FROM goods WHERE `often-ordered`=1", []);
  ctx.body = { products: foods };
  ctx.status = 200;
});

export default oftenOrderRouter;
