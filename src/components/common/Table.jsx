import PriorityLabel from "./PriorityLabel";
import StatusLabel from "./StatusLabel";
export default function Table({ }) {
    const [tableHeadItems, setTableHeadItems] = useState([
        { key: 'Title', direction: '' },
        { key: 'Description', direction: '' },
        { key: 'Status', direction: '' },
        { key: 'Priority', direction: '' },
        { key: 'Deadline', direction: '' }
    ]);
    return <div className="table-container">
        <table>
            <TableHead>
                {tableHeadItems.map((sort) => <th>
                    {(sort.key === 'Title' || sort.key === 'Description' || sort.key === 'Deadline') && <FilterInputTH onInputFilter={(v) => handleFilterTask(v, sort.key.toLowerCase())} show={showFilter === sort.key.toLowerCase()} setFilterShow={() => handleShowFilter(sort.key.toLowerCase())}>
                        <SortButton key={sort.key} title={sort.key} direction={sort.direction} onSort={() => handleSort(sort.direction, sort.key)} />
                    </FilterInputTH>}

                    {(sort.key === 'Status' || sort.key === 'Priority') && <FilterSelectTH onInputFilter={(v) => handleFilterTask(v, sort.key.toLowerCase())} optionArr={sort.key === 'Priority' ? optionPriority : optionStatus} setFilterShow={() => handleShowFilter(sort.key.toLowerCase())} show={showFilter === sort.key.toLowerCase()}>
                        <SortButton key={sort.key} title={sort.key} direction={sort.direction} onSort={() => handleSort(sort.direction, sort.key)} />
                    </FilterSelectTH>}
                </th>
                )}


                <th>Action</th>
            </TableHead>
            <TableBody tasks={filterTasks} editTask={handleEditInAddTask} deleteTask={handleDeleteTask} />
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