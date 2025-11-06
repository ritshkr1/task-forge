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
const [tasks,setTasks] = useState([...initialTasks]);
const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState(null);
function handleNewTasks(newTask){
  if(selectedTask){
    if(newTask){
      setTasks(tasks.map((task) => {
      if(task.id === selectedTask.id){
        return newTask
      }else{
        return task
      }
    }));
    }
    
  }else{
    if(newTask){
      setTasks((tasks) => [...tasks,newTask]);
    }
  }
  setSelectedTask(null)
  setIsNewTaskOpen(false);
}
function handleEditInAddTask(id){
    const selectedTask = tasks.filter((task) => task.id === id);
    setSelectedTask(selectedTask[0]);
    setIsNewTaskOpen(true);
    console.log(selectedTask);
}
function handleDeleteTask(id){
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
}
  return (
 <>
 <header>
  <span>
    Task Forge
    </span>
  <button onClick={() => setIsNewTaskOpen((curr) => !curr)} disabled={isNewTaskOpen ? true : false}>{isNewTaskOpen ? "Close" : "Add Task"}</button>
 </header>
 {isNewTaskOpen && <AddTask handleNewTask={handleNewTasks} selectedTask={selectedTask}/>}
 <TaskTableList tasks={tasks} editTask={handleEditInAddTask} deleteTask={handleDeleteTask} selectedTask={selectedTask}/>
 <footer>© 2025 Task Forge created by Ritesh in React</footer></>
  );
}

export default Layout;
