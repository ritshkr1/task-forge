import { useState } from "react";
import PriorityLabel from "./PriorityLabel";
import StatusLabel from "./StatusLabel";
import SortButton from "./SortComponent";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import { optionPriority, optionStatus } from '../../data'
export default function Table({ tasks, updateTasks, setModalOpen, setSelectedTask }) {
    const [tableHeadItems, setTableHeadItems] = useState([
        { key: 'Title', direction: '' },
        { key: 'Description', direction: '' },
        { key: 'Status', direction: '' },
        { key: 'Priority', direction: '' },
        { key: 'Deadline', direction: '' }
    ]);
    const [showFilter, setShowFilter] = useState('');
    function handleFilterTask(value, field) {
        const lowerCaseValue = value.toLowerCase();
        const filtered = tasks.filter((task) => task[field].toLowerCase().includes(lowerCaseValue))
        updateTasks([...filtered]);
        setShowFilter(field);

    }

    function handleShowFilter(value) {
        let nextShowFilter = ""
        if (value !== showFilter) {
            nextShowFilter = value;
        }
        setShowFilter(c => nextShowFilter)
    }

    function handleSort(direction, key) {
        const sortNextDirection = direction === 'asc' ? 'desc' : 'asc';
        const lowerCaseKey = key.toLowerCase()
        const sorted = [...filterTasks].sort((a, b) => {
            if (a[lowerCaseKey] < b[lowerCaseKey]) return sortNextDirection === "asc" ? -1 : 1;
            if (a[lowerCaseKey] > b[lowerCaseKey]) return sortNextDirection === "asc" ? 1 : -1;
            return 0;
        });
        const updatedTableHeadItems = tableHeadItems.map((config) => {
            if (config.key === key) {
                return { key, direction: sortNextDirection }
            } else {
                return { key: config.key, direction: '' }
            }
        })
        setTableHeadItems((c) => updatedTableHeadItems);
        updateTasks(sorted);
    };

    function handleEditTask(id) {
        const selectedTask = tasks.filter((task) => task.id === id);
        setSelectedTask((curr) => curr = selectedTask[0]);
        setModalOpen('edit');
    }

    function handleDeleteTask(id) {
        const deleteTasksArr = tasks.filter((task) => task.id !== id)
        updateTasks(deleteTasksArr);
    }
    return <div className="table-container">
        <table>
            <TableHead>
                {tableHeadItems.map((sort) => <th>
                    {(sort.key === 'Title' || sort.key === 'Description' || sort.key === 'Deadline') && <FilterInput onInputFilter={(v) => handleFilterTask(v, sort.key.toLowerCase())} show={showFilter === sort.key.toLowerCase()} setFilterShow={() => handleShowFilter(sort.key.toLowerCase())}>
                        <SortButton key={sort.key} title={sort.key} direction={sort.direction} onSort={() => handleSort(sort.direction, sort.key)} />
                    </FilterInput>}

                    {(sort.key === 'Status' || sort.key === 'Priority') && <FilterSelect onInputFilter={(v) => handleFilterTask(v, sort.key.toLowerCase())} optionArr={sort.key === 'Priority' ? optionPriority : optionStatus} setFilterShow={() => handleShowFilter(sort.key.toLowerCase())} show={showFilter === sort.key.toLowerCase()}>
                        <SortButton key={sort.key} title={sort.key} direction={sort.direction} onSort={() => handleSort(sort.direction, sort.key)} />
                    </FilterSelect>}
                </th>
                )}


                <th>Action</th>
            </TableHead>
            <TableBody tasks={tasks} editTask={handleEditTask} deleteTask={handleDeleteTask} />
        </table>
    </div>

}



function TableHead({ children }) {
    return <thead>
        <tr>
            {children}
        </tr>
    </thead>
}

function TableBody({ tasks, editTask, deleteTask }) {
    return <tbody>
        {tasks.map((task) => (
            <tr key={task.id}>
                <td style={{ opacity: task.status === "Done" ? "0.45" : "1" }}>{task.title}</td>
                <td style={{ opacity: task.status === "Done" ? "0.45" : "1" }}>{task.description}</td>
                <td>
                    <span style={{ opacity: task.status === "Done" ? "0.45" : "1" }}>
                        <StatusLabel status={task.status} />
                    </span>
                </td>
                <td style={{ opacity: task.status === "Done" ? "0.45" : "1" }}>
                    <PriorityLabel priority={task.priority} />
                </td>
                <td style={{ opacity: task.status === "Done" ? "0.45" : "1" }}>{task.deadline}</td>
                <td>
                    <div class="edit-actions">
                        <button type="submit" style={{ width: '100px', fontWeight: '600' }} onClick={() => editTask(task.id)}>Edit</button>
                        <button type="button" style={{ width: '100px', fontWeight: '600' }} class="btn-secondary" onClick={() => deleteTask(task.id)} >Delete</button>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
}