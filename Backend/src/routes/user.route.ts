import { Router } from "express";
import { signup } from "../controllers/authController";
import { login } from "../controllers/authController";
import { createTask } from "../controllers/taskController";
import { authenticate } from "../validation/user.validation";
import { getTasks } from "../controllers/taskController";
import { deleteTask } from "../controllers/taskController";
import express from "express";

const router = Router();
const app = express();
app.use(express.json());

router.post("/signup", signup);

router.post("/login", login);
router.post("/task", authenticate, createTask);
router.get("/tasks", authenticate, getTasks);
router.delete("/tasks/:id", authenticate, deleteTask);
export default router;
