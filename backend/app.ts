import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/api/ping", async (ctx) => {
  ctx.status = 200;
  ctx.body = { message: "Server online." };
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
