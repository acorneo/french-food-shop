import Router from "koa-router";
import { all } from "../../utils/database";

const categoriesRouter = new Router();

categoriesRouter.get("/api/categories/novelties", async (ctx) => {
  const products = await all(
    "SELECT * FROM goods WHERE category='novelties'",
    [],
  );
  ctx.body = { products: products };
  ctx.status = 200;
});

categoriesRouter.get("/api/categories/pastries", async (ctx) => {
  const products = await all(
    "SELECT * FROM goods WHERE category='pastries'",
    [],
  );
  ctx.body = { products: products };
  ctx.status = 200;
});

categoriesRouter.get("/api/categories/lunch", async (ctx) => {
  const products = await all("SELECT * FROM goods WHERE category='lunch'", []);
  ctx.body = { products: products };
  ctx.status = 200;
});

export default categoriesRouter;
