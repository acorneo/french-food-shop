import Koa from "koa";
import bodyParser from "koa-bodyparser";
import mainRouter from "./routes/router";

const app = new Koa();

app.use(bodyParser());
app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
