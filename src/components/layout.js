import AddTask from "./addNewTask"
import TaskTableList from "./tableviewList";
import { useState } from "react";
import TBody from "./tableBody";
import THead from './tableHead';
import FilterInputTH from './FiltersInputs';
import FilterSelectTH from './FilterSelects';
import SortButton from './Sortbutton';
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
      {isNewTaskOpen && <AddTask handleNewTask={handleNewTasks} selectedTask={selectedTask} />}
      <TaskTableList>
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
      </TaskTableList>
      <footer>© 2025 Task Forge created by Ritesh in React</footer></>
  );
}

export default Layout;