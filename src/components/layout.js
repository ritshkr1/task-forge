import AddTask from "./addNewTask"
import TaskTableList from "./tableviewList";
import {useState} from "react";
const initialTasks = [
    {
      id: 1,
      title: "Design homepage",
      description: "Create responsive layout and hero section",
      status: "To-Do",
      priority: "High",
      deadline: "2025-11-08",
    },
    {
      id: 2,
      title: "Setup local storage",
      description: "Implement persistence for task data",
      status: "In-Progress",
      priority: "Medium",
      deadline: "2025-11-10",
    },
    {
      id: 3,
      title: "Polish UI",
      description: "Add hover states and spacing improvements",
      status: "Done",
      priority: "Low",
      deadline: "2025-11-12",
    },
  ];
function Layout() {
const [tasks,setTasks] = useState([...initialTasks])
function handleNewTasks(newTask){
    setTasks((tasks) => [...tasks,newTask])
}
function handleEditInAddTask(id){
    console.log(id)
}
function handleDeleteTask(id){
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
}
  return (
 <>
 <header>Task Forge</header>
 <AddTask handleNewTask={handleNewTasks}/>
 <TaskTableList tasks={tasks} editTask={handleEditInAddTask} deleteTask={handleDeleteTask}/>
 <footer>© 2025 Task Forge created by Ritesh in React</footer></>
  );
}

export default Layout;
