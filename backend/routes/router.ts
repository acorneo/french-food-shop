import Router from "koa-router";
import pingRouter from "./api/ping";
import imageRouter from "./api/food_url";
import oftenOrderRouter from "./api/oftenOrder";

const mainRouter = new Router();
mainRouter.use(pingRouter.routes());
mainRouter.use(imageRouter.routes());
mainRouter.use(oftenOrderRouter.routes());

export default mainRouter;
