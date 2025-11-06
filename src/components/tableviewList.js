import {useState} from "react";
function TableList({ tasks, deleteTask, editTask, selectedTask }) {
  const [filterTask, setFilterTask] = useState(tasks);
  function handleFilterTask(value,field){
    const lowerCaseValue = value.toLowerCase();
    const filtered = tasks.filter((task)=>task[field].toLowerCase().includes(lowerCaseValue))
    setFilterTask(filtered)
  }
  return <main>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th><TableHead onInputFilter={(v) => handleFilterTask(v,'title')}>Title</TableHead></th>
            <th><TableHead onInputFilter={(v) => handleFilterTask(v,'description')}>Description</TableHead></th>
            <th>
              {/* <TableHead>
                </TableHead> */}
                Status
                </th>
            <th>Priority
              {/* <TableHead></TableHead> */}
              </th>
            <th><TableHead onInputFilter={(v) => handleFilterTask(v,'deadline')}>Deadline</TableHead></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterTask.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <span >
                  {task.status}
                </span>
              </td>
              <td >
                {task.priority}
              </td>
              <td>{task.deadline}</td>
              <td>
                <div class="edit-actions">
                  <button type="submit" style={{ width: '80px', fontWeight: '600' }} disabled={task.id === selectedTask?.id ? true : false} onClick={() => { editTask(task.id) }}>Edit</button>
                  <button type="button" style={{ width: '80px', fontWeight: '600' }} class="btn-secondary" onClick={() => deleteTask(task.id)} disabled={task.id === selectedTask?.id ? true : false}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
}

function TableHead({ children,onInputFilter}) {
  const [showFilter,setShowFilter] = useState(false);
  const [input,setInput] = useState("");
  function handleInput(value){
    setInput(value);
    onInputFilter(value);
  }
  return <div className="table-head-wrapper">
      <span className="table-head-title">{children}</span>
      <span
        className="filter-icon"
        onClick={() => setShowFilter((c) => !c)}
        title="Filter"
      ><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' height='16' fill='none' stroke='#555' stroke-width='40' stroke-linecap='round' stroke-linejoin='round'><path d='M64 96h384L304 288v128l-96 32V288L64 96z'/></svg></span>
      {showFilter && (
        <input
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          className="table-head-filter"
          placeholder="Filter..."
        />
      )}
    </div>
}

export default TableList;