import Router from "koa-router";
import path from "path";
import fs from "fs";

const imageRouter = new Router();

const foodItems = [
  "croissant",
  "coca_cola",
  "baguette",
  "lemonade",
  "macarons",
  "mojito",
  "tartiflette",
];

foodItems.forEach((food) => {
  imageRouter.get(`/api/images/${food}`, async (ctx) => {
    const imagePath = path.join(__dirname, `../../assets/${food}.png`);
    console.log(`looking for ${imagePath}`);
    if (fs.existsSync(imagePath)) {
      ctx.type = "image/png";
      ctx.body = fs.createReadStream(imagePath);
    } else {
      ctx.status = 404;
      ctx.body = { error: "Image not found" };
    }
  });
});

export default imageRouter;
