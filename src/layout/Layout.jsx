
import { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import TaskModal from '../components/TaskFormModal'
import Table from "../components/common/Table";
import Board from '../components/common/Kanban'


function Layout({ initialTasks }) {
    const [tabName, setTabName] = useState("Table");    
    // const [tasks, setTasks] = useState([...initialTasks]);
    const [tasks, setTasks] = useState(() => {
        const localStorageTasks = localStorage.getItem('tasks')
        const parsedTasks = JSON.parse(localStorageTasks);
        return parsedTasks ? parsedTasks : initialTasks
    })
    const [filterTasks, setFilterTasks] = useState([...tasks])
    const [isModalOpen, setIsModalOpen] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);


    function handleUpdateTasks(tasks) {
        setTasks((t) => [...tasks]);
        setFilterTasks((f) => [...tasks]);
        const tasksStringData = JSON.stringify(tasks)
        localStorage.setItem('tasks', tasksStringData);
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
        setIsModalOpen('');
    }


    function handleKanbanEditMode(id) {
        const selectedTask = tasks.filter((task) => task.id === id);
        setSelectedTask((curr) => curr = selectedTask[0]);
        setIsModalOpen('edit');
    }

    function handleEditTaskKanban(id) {
        const selectedTask = tasks.filter((task) => task.id === id);
        setSelectedTask((curr) => curr = selectedTask[0]);
        setIsModalOpen('view');
    }



    return (
        <>
            <Header tabName={tabName} setTabName={(tab) => setTabName((curr) => tab)} modalopen={isModalOpen} setModalOpen={(arg) => setIsModalOpen(arg)} />
            <Main>
                {isModalOpen && <TaskModal handleNewTask={handleNewTasks} handleKanbanEdit={handleKanbanEditMode} selectedTask={selectedTask} key={selectedTask ? selectedTask.id : 'new'} mode={isModalOpen === 'view' ? 'view' : 'add'} />}
                {tabName === 'Table' ? <Table tasks={filterTasks} updateTasks={handleUpdateTasks} setModalOpen={(value) => setIsModalOpen(c => value)} setSelectedTask={(arr) => setSelectedTask(c => arr)} /> : <Board tasks={filterTasks} updateTasks={handleUpdateTasks} editTask={handleEditTaskKanban} />
                }

            </Main>


            <Footer />
        </>
    );
}

export default Layout;