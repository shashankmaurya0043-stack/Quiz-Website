import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import authRouter from "./auth.js";
import questionsRouter from "./questions.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(questionsRouter);

export default router;
