import { Router } from "express";
import healthRouter from "./health.js";
import authRouter from "./auth.js";
import questionsRouter from "./questions.js";

const router = Router(); // Yahan se : IRouter hata diya

router.use(healthRouter);
router.use(authRouter);
router.use(questionsRouter);

export default router;
