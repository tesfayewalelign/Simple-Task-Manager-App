import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createTask = async (req: Request, res: Response) => {
  const { title, status } = req.body;
  const userId = (req as any).user?.id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized: user ID not found" });
  }
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        status: status || "pending",
        userId: userId,
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error: any) {
    console.error("Task Creation Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: (req as any).user.id },
      orderBy: { createdAt: "desc" },
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
export const deleteTask = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const { id } = req.params;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized: user ID not found" });
  }
  const taskId = parseInt(id, 10);
  try {
    const task = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await prisma.task.delete({ where: { id: taskId } });
    return res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Delete Task Error:", err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};
