import { createContext, useContext, useState } from "react";
import { ToastrMessage } from "./common/ToastrFunction"; // Assuming you have this from previous steps
import { TASKS_DATA } from "../data";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // 1. Holds the list of all tasks
  const [tasks, setTasks] = useState([...TASKS_DATA]);

  // 2. The Logic to Add OR Update
  const saveTask = (taskData) => {
    let returnResponse = false
    setTasks((prevTasks) => {
      // Check if we are editing an existing task (it has an ID)
      const isExisting = prevTasks.some((t) => t.id === taskData.id);

      if (isExisting) {
        // --- UPDATE ---
        ToastrMessage.success("Task updated successfully.");
        returnResponse = true
        return prevTasks.map((t) => (t.id === taskData.id ? { ...t, ...taskData } : t));
      } else {
        // --- CREATE ---
        // Generate a new ID (using Date.now() for simplicity)
        const newTask = { ...taskData, id: Date.now(), created: new Date().toLocaleDateString(), reporter: { "name": "Ritesh Kumar", "avatar": "RK" } };
        ToastrMessage.success("New task created successfully.");
        returnResponse = true
        return [...prevTasks, newTask];
      }
    });

    return returnResponse;
  };

  // 3. Helper to delete (optional but useful)
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    ToastrMessage.error("Task deleted successfully.");
  };

  return (
    <TaskContext.Provider value={{ tasks, saveTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);