import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/taskTypes";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    conludedTasksCount: tasks.filter((task) => task.concluded).length
  }
}