import AddTask from "./addNewTask"
import TaskTableList from "./tableviewList";
import { useState } from "react";
import TBody from "./tableBody";
import THead from './tableHead';
import FilterInputTH from './FiltersInputs';
import FilterSelectTH from './FilterSelects';
import SortButton from './Sortbutton';
import BoardView from "./kanbanView";
const initialTasks = [
  { id: 1, title: "Design homepage", description: "Create responsive layout and hero section", status: "To-Do", priority: "High", deadline: "2025-11-08" },
  { id: 2, title: "Setup local storage", description: "Implement persistence for task data", status: "In-Progress", priority: "Medium", deadline: "2025-11-10" },
  { id: 3, title: "Polish UI", description: "Add hover states and spacing improvements", status: "Done", priority: "Low", deadline: "2025-11-12" },
  { id: 4, title: "Create login form", description: "Add validation and error messages", status: "To-Do", priority: "High", deadline: "2025-11-09" },
  { id: 5, title: "Integrate API", description: "Connect frontend with backend endpoints", status: "In-Progress", priority: "High", deadline: "2025-11-11" },
  { id: 6, title: "Write unit tests", description: "Cover main components with Jest", status: "To-Do", priority: "Medium", deadline: "2025-11-14" },
  { id: 7, title: "Optimize images", description: "Compress assets for faster load", status: "Done", priority: "Low", deadline: "2025-11-07" },
  { id: 8, title: "Setup routing", description: "Implement React Router navigation", status: "In-Progress", priority: "Medium", deadline: "2025-11-13" },
  { id: 9, title: "Add tooltips", description: "Enhance UX for action buttons", status: "To-Do", priority: "Low", deadline: "2025-11-15" },
  { id: 10, title: "Create sidebar menu", description: "Implement collapsible menu", status: "Done", priority: "Medium", deadline: "2025-11-08" },
  { id: 11, title: "Setup dark mode", description: "Add toggle with CSS variables", status: "To-Do", priority: "High", deadline: "2025-11-16" },
  { id: 12, title: "Fix table responsiveness", description: "Ensure mobile-friendly layout", status: "In-Progress", priority: "Medium", deadline: "2025-11-12" },
  { id: 13, title: "Implement search filter", description: "Add real-time filtering for tasks", status: "Done", priority: "High", deadline: "2025-11-10" },
  { id: 14, title: "Create task form", description: "Add inputs and validation", status: "To-Do", priority: "Medium", deadline: "2025-11-18" },
  { id: 15, title: "Setup notifications", description: "Show toast messages on actions", status: "In-Progress", priority: "Low", deadline: "2025-11-14" },
  { id: 16, title: "Add drag-and-drop", description: "Reorder tasks between columns", status: "To-Do", priority: "High", deadline: "2025-11-20" },
  { id: 17, title: "Document components", description: "Add comments and usage examples", status: "Done", priority: "Medium", deadline: "2025-11-09" },
  { id: 18, title: "Setup CI/CD", description: "Automate deployment workflow", status: "In-Progress", priority: "High", deadline: "2025-11-17" },
  { id: 19, title: "Add profile page", description: "Show user details and settings", status: "To-Do", priority: "Medium", deadline: "2025-11-21" },
  { id: 20, title: "Refactor code", description: "Clean up redundant logic and components", status: "Done", priority: "Low", deadline: "2025-11-11" }
];

function Layout() {
  const [tabName, setTabName] = useState("Board");
  const [tasks, setTasks] = useState([...initialTasks]);
  const [filterTasks, setFilterTasks] = useState([...tasks])
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const optionStatus = ['In-progress', 'Done', 'Created'];
  const optionPriority = ['Medium', 'Low', 'High'];
  function handleUpdateTasks(tasks) {
    setTasks((curr) => curr = tasks);
    setFilterTasks((curr) => curr = tasks)
  }
  function handleFilterTask(value, field) {
    const lowerCaseValue = value.toLowerCase();
    const filtered = tasks.filter((task) => task[field].toLowerCase().includes(lowerCaseValue))
    setFilterTasks([...filtered]);

  }

  function handleNewTasks(newTask) {
    let newTaskArr = tasks;
    if (selectedTask) {
      if (newTask) {
        newTaskArr = tasks.map((task) => {
          if (task.id === selectedTask.id) {
            return newTask
          } else {
            return task
          }
        })
      }

    } else {
      if (newTask) {
        newTaskArr = [...tasks, newTask]
      }
    }
    handleUpdateTasks(newTaskArr);
    setSelectedTask(null)
    setIsNewTaskOpen(false);
  }
  function handleEditInAddTask(id) {
    const selectedTask = tasks.filter((task) => task.id === id);
    setSelectedTask(selectedTask[0]);
    setIsNewTaskOpen(true);
    console.log(selectedTask);
  }
  function handleDeleteTask(id) {
    const deleteTasksArr = tasks.filter((task) => task.id !== id)
    handleUpdateTasks(deleteTasksArr);
  }
  function handleSort(direction, key) {
    const sorted = [...filterTasks].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    handleUpdateTasks(sorted);
  };
  return (
    <>
      <header>
        <span>
          Task Forge
        </span>
        <button onClick={() => setIsNewTaskOpen((curr) => !curr)} disabled={isNewTaskOpen ? true : false}>{isNewTaskOpen ? "Close" : "Add Task"}</button>
      </header>
      <div className="navbar-container">
        <button onClick={() => setTabName((curr) => curr = "Board")} disabled={isNewTaskOpen ? true : false}>Board View</button>
        <button onClick={() => setTabName((curr) => curr = "Table")} disabled={isNewTaskOpen ? true : false}>Table View</button>
      </div >
      {isNewTaskOpen && <AddTask handleNewTask={handleNewTasks} selectedTask={selectedTask} />}
      {tabName === 'Table' ?<TaskTableList>
        <THead>
          <th>
            <FilterInputTH onInputFilter={(v) => handleFilterTask(v, 'title')}>
              <SortButton onSort={(dir) => handleSort(dir, 'title')}>
                Title
              </SortButton>
            </FilterInputTH>
          </th>
          <th>
            <FilterInputTH onInputFilter={(v) => handleFilterTask(v, 'description')}><SortButton onSort={(dir) => handleSort(dir, 'description')}>
              Description
            </SortButton></FilterInputTH>
          </th>
          <th><FilterSelectTH onInputFilter={(v) => handleFilterTask(v, 'status')} optionArr={optionStatus}><SortButton onSort={(dir) => handleSort(dir, 'status')}>
            Status
          </SortButton></FilterSelectTH></th>
          <th style={{width:'150px'}}>
            <SortButton onSort={(dir) => handleSort(dir, 'priority')}>
            Priority
          </SortButton><FilterSelectTH onInputFilter={(v) => handleFilterTask(v, 'priority')} optionArr={optionPriority}></FilterSelectTH></th>
          <th><FilterInputTH onInputFilter={(v) => handleFilterTask(v, 'deadline')}><SortButton onSort={(dir) => handleSort(dir, 'deadline')}>
            Deadline
          </SortButton></FilterInputTH>
          </th>

          <th>Action</th>
        </THead>
        <TBody tasks={filterTasks} editTask={handleEditInAddTask} deleteTask={handleDeleteTask} />
      </TaskTableList>:<BoardView tasks={filterTasks}/>}
      <footer>© 2025 Task Forge created by Ritesh in React</footer></>
  );
}

export default Layout;