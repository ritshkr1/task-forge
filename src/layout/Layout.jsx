
import { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import TaskModal from '../components/TaskFormModal'
import Table from "../components/common/Table";
import Board from '../components/common/Kanban';
import { applyFilters, handleSort } from "../utils/FilterUtils";


function Layout({ initialTasks }) {
    const [tabName, setTabName] = useState("Table");    
    // const [tasks, setTasks] = useState([...initialTasks]);
    const [masterTaskList, setMasterTaskList] = useState(() => {
        const localStorageTasks = localStorage.getItem('tasks')
        const parsedTasks = JSON.parse(localStorageTasks);
        return parsedTasks ? parsedTasks : initialTasks
    })
    const [filterTaskList, setFilterTaskList] = useState([...masterTaskList])
    const [isModalOpen, setIsModalOpen] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);


    function handleUpdateTasks(tasks) {
        setMasterTaskList((t) => [...tasks]);
        setFilterTaskList((f) => [...tasks]);
        const tasksStringData = JSON.stringify(tasks)
        localStorage.setItem('tasks', tasksStringData);
    }

    function handleFilterTasks(applyFilter) {
        const updatedTasks = applyFilters(masterTaskList, applyFilter);
        setFilterTaskList(c => updatedTasks)
    }

    function handleSortTasks(applySort) {
        const updatedTasks = handleSort(masterTaskList, applySort);
        setFilterTaskList(c => updatedTasks);
    }

    function handleNewTasks(newTask) {
        let newTaskArr = masterTaskList;
        if (selectedTask) {
            if (newTask) {
                newTaskArr = masterTaskList.map((task) => {
                    if (task.id === selectedTask.id) {
                        return newTask
                    } else {
                        return task
                    }
                })
            }

        } else {
            if (newTask) {
                newTaskArr = [...masterTaskList, newTask]
            }
        }
        handleUpdateTasks(newTaskArr);
        setSelectedTask(null)
        setIsModalOpen('');
    }


    function handleKanbanEditMode(id) {
        const selectedTask = masterTaskList.filter((task) => task.id === id);
        setSelectedTask((curr) => curr = selectedTask[0]);
        setIsModalOpen('edit');
    }

    function handleEditTaskKanban(id) {
        const selectedTask = masterTaskList.filter((task) => task.id === id);
        setSelectedTask((curr) => curr = selectedTask[0]);
        setIsModalOpen('view');
    }



    return (
        <>
            <Header tabName={tabName} setTabName={(tab) => setTabName((curr) => tab)} modalopen={isModalOpen} setModalOpen={(arg) => setIsModalOpen(arg)} />
            <Main>
                {isModalOpen && <TaskModal handleNewTask={handleNewTasks} handleKanbanEdit={handleKanbanEditMode} selectedTask={selectedTask} key={selectedTask ? selectedTask.id : 'new'} mode={isModalOpen === 'view' ? 'view' : 'add'} />}
                {tabName === 'Table' ? <Table tasks={filterTaskList} onFilter={handleFilterTasks} updateTasks={handleUpdateTasks} setModalOpen={(value) => setIsModalOpen(c => value)} setSelectedTask={(arr) => setSelectedTask(c => arr)} onSort={handleSortTasks} /> : <Board tasks={filterTaskList} updateTasks={handleUpdateTasks} editTask={handleEditTaskKanban} />
                }

            </Main>


            <Footer />
        </>
    );
}

export default Layout;