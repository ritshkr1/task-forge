
import { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import TaskModal from '../components/TaskFormModal'
import TasksList from "../components/TasksTable";
import Board from '../components/Kanban';
import { applyFilters, handleSort } from "../utils/FilterUtils";
import Dashboard from "../components/Dashboard";
import Sidebar from "./SideBar";
import { TASKS_DATA } from "../data";

function Layout() {
  const [tabName, setTabName] = useState("Dashboard");
  // const [tasks, setTasks] = useState([...initialTasks]);
  const [masterTaskList, setMasterTaskList] = useState(() => {
    const localStorageTasks = localStorage.getItem("tasks");
    const parsedTasks = JSON.parse(localStorageTasks);
    return parsedTasks ? parsedTasks : [...TASKS_DATA];
  });
  const [filterTaskList, setFilterTaskList] = useState([...masterTaskList]);
  const [isModalOpen, setIsModalOpen] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  function handleUpdateTasks(tasks) {
    setMasterTaskList((t) => (t = [...tasks]));
    setFilterTaskList((f) => (f = [...tasks]));
    const tasksStringData = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksStringData);
  }

  function handleFilterTasks(applyFilter) {
    const updatedTasks = applyFilters(masterTaskList, applyFilter);
    setFilterTaskList((c) => updatedTasks);
  }

  function handleSortTasks(applySort) {
    const updatedTasks = handleSort(masterTaskList, applySort);
    setFilterTaskList((c) => updatedTasks);
  }

  function handleNewTasks(newTask) {
    let newTaskArr = masterTaskList;
    if (selectedTask) {
      if (newTask) {
        newTaskArr = masterTaskList.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        });
      }
    } else {
      if (newTask) {
        newTaskArr = [...masterTaskList, newTask];
      }
    }
    handleUpdateTasks(newTaskArr);
    setSelectedTask(null);
    setIsModalOpen("");
  }

  function handleKanbanEditMode(id) {
    const selectedTask = masterTaskList.filter((task) => task.id === id);
    setSelectedTask((curr) => (curr = selectedTask[0]));
    setIsModalOpen("edit");
  }

  function handleEditTaskKanban(id) {
    const selectedTask = masterTaskList.filter((task) => task.id === id);
    setSelectedTask((curr) => (curr = selectedTask[0]));
    setIsModalOpen("view");
  }

  return (
    <div className="layout-parent">
      <Header
        tabName={tabName}
        setTabName={(tab) => setTabName((curr) => tab)}
        setModalOpen={(arg) => setIsModalOpen(arg)}
      />
      <Sidebar />
      <Main>
        {isModalOpen && (
          <TaskModal
            handleNewTask={handleNewTasks}
            handleKanbanEdit={handleKanbanEditMode}
            selectedTask={selectedTask}
            key={selectedTask ? selectedTask.id : "new"}
            mode={isModalOpen === "view" ? "view" : "add"}
          />
        )}
        {tabName === "Table" && (
          <TasksList
            tasks={filterTaskList}
            onFilter={handleFilterTasks}
            updateTasks={handleUpdateTasks}
            setModalOpen={(value) => setIsModalOpen((c) => value)}
            setSelectedTask={(arr) => setSelectedTask((c) => arr)}
            onSort={handleSortTasks}
          />
        )}
        {tabName === "Board" && (
          <Board
            tasks={filterTaskList}
            updateTasks={handleUpdateTasks}
            editTask={handleEditTaskKanban}
          />
        )}
        {tabName === "Dashboard" && <Dashboard />}
      </Main>

      <Footer />
    </div>
  );
}

export default Layout;