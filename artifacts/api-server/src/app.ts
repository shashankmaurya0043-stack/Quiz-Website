import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { pinoHttp } from "pino-http"; // Pino-http ko aise import karein
import router from "./routes/index.js"; // .js lagana zaroori hai
import { logger } from "./lib/logger.js"; // .js lagana zaroori hai
import { authMiddleware } from "./middlewares/authMiddleware.js"; // .js lagana zaroori hai

const app = express(); // Type 'Express' hata diya taaki inference sahi chale

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: any) { // Type 'any' add kiya taaki implicit any error na aaye
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) { // Type 'any' add kiya
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use("/api", router);

export default app;
