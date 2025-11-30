
// import TaskTableList from "./tableviewList";
import { useState } from "react";
// import TBody from "../components/tableBody";
// import THead from '../components/tableHead';
// import FilterInputTH from '../components/FiltersInputs';
// import FilterSelectTH from '../components/FilterSelects';
// import SortButton from '../components/Sortbutton';
// import BoardView from "./kanbanView";
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import TaskModal from '../components/TaskFormModal'


function Layout({ initialTasks }) {
    const [tabName, setTabName] = useState("Board");
    const [sortConfig, setSortConfig] = useState([
        { key: 'Title', direction: '' },
        { key: 'Description', direction: '' },
        { key: 'Status', direction: '' },
        { key: 'Priority', direction: '' },
        { key: 'Deadline', direction: '' }
    ]);
    const [showFilter, setShowFilter] = useState('');
    // const [tasks, setTasks] = useState([...initialTasks]);
    const [tasks, setTasks] = useState(() => {
        const localStorageTasks = localStorage.getItem('tasks')
        const parsedTasks = JSON.parse(localStorageTasks);
        return parsedTasks ? parsedTasks : initialTasks
    })
    const [filterTasks, setFilterTasks] = useState([...tasks])
    const [isModalOpen, setIsModalOpen] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);

    const optionStatus = ['In-progress', 'Done', 'To-Do'];
    const optionPriority = ['Medium', 'Low', 'High'];
    function handleUpdateTasks(tasks) {
        setTasks((t) => [...tasks]);
        setFilterTasks((f) => [...tasks]);
        const tasksStringData = JSON.stringify(tasks)
        localStorage.setItem('tasks', tasksStringData);
    }
    function handleFilterTask(value, field) {
        const lowerCaseValue = value.toLowerCase();
        const filtered = tasks.filter((task) => task[field].toLowerCase().includes(lowerCaseValue))
        setFilterTasks([...filtered]);
        setShowFilter(field);

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
    function handleShowFilter(value) {
        let nextShowFilter = ""
        if (value !== showFilter) {
            nextShowFilter = value;
        }
        setShowFilter(c => nextShowFilter)
    }
    function handleEditInAddTask(id) {
        const selectedTask = tasks.filter((task) => task.id === id);
        setSelectedTask((curr) => curr = selectedTask[0]);
        setIsModalOpen('edit');
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
    function handleDeleteTask(id) {
        const deleteTasksArr = tasks.filter((task) => task.id !== id)
        handleUpdateTasks(deleteTasksArr);
    }
    function handleSort(direction, key) {
        const sortNextDirection = direction === 'asc' ? 'desc' : 'asc';
        const lowerCaseKey = key.toLowerCase()
        const sorted = [...filterTasks].sort((a, b) => {
            if (a[lowerCaseKey] < b[lowerCaseKey]) return sortNextDirection === "asc" ? -1 : 1;
            if (a[lowerCaseKey] > b[lowerCaseKey]) return sortNextDirection === "asc" ? 1 : -1;
            return 0;
        });
        const updatedSortConfig = sortConfig.map((config) => {
            if (config.key === key) {
                return { key, direction: sortNextDirection }
            } else {
                return { key: config.key, direction: '' }
            }
        })
        setSortConfig((c) => updatedSortConfig);
        handleUpdateTasks(sorted);
    };

    return (
        <>
            <Header tabName={tabName} setTabName={(tab) => setTabName((curr) => tab)} modalopen={isModalOpen} setModalOpen={(arg) => setIsModalOpen(arg)} />
            <Main>
                {isModalOpen && <TaskModal handleNewTask={handleNewTasks} handleKanbanEdit={handleKanbanEditMode} selectedTask={selectedTask} key={selectedTask ? selectedTask.id : 'new'} mode={isModalOpen === 'view' ? 'view' : 'add'} />}
            {tabName === 'Table' ? <TaskTableList>
                <THead>
                    {sortConfig.map((sort) => <th>
                        {(sort.key === 'Title' || sort.key === 'Description' || sort.key === 'Deadline') && <FilterInputTH onInputFilter={(v) => handleFilterTask(v, sort.key.toLowerCase())} show={showFilter === sort.key.toLowerCase()} setFilterShow={() => handleShowFilter(sort.key.toLowerCase())}>
                            <SortButton key={sort.key} title={sort.key} direction={sort.direction} onSort={() => handleSort(sort.direction, sort.key)} />
                        </FilterInputTH>}

                        {(sort.key === 'Status' || sort.key === 'Priority') && <FilterSelectTH onInputFilter={(v) => handleFilterTask(v, sort.key.toLowerCase())} optionArr={sort.key === 'Priority' ? optionPriority : optionStatus} setFilterShow={() => handleShowFilter(sort.key.toLowerCase())} show={showFilter === sort.key.toLowerCase()}>
                            <SortButton key={sort.key} title={sort.key} direction={sort.direction} onSort={() => handleSort(sort.direction, sort.key)} />
                        </FilterSelectTH>}
                    </th>
                    )}


                    <th>Action</th>
                </THead>
                <TBody tasks={filterTasks} editTask={handleEditInAddTask} deleteTask={handleDeleteTask} />
            </TaskTableList> : <BoardView tasks={filterTasks} updateTasks={handleUpdateTasks} editTask={handleEditTaskKanban} />}
            </Main>


            <Footer />
        </>
    );
}

export default Layout;