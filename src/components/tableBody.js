import PriorityLabel from "./priorityLabel";
function TableBody({tasks,editTask,deleteTask}){
    return <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <span >
                  {task.status}
                </span>
              </td>
              <td >
                <PriorityLabel priority={task.priority}/>
              </td>
              <td>{task.deadline}</td>
              <td>
                <div class="edit-actions">
                  <button type="submit" style={{ width: '80px', fontWeight: '600' }}  onClick={() => editTask(task.id)}>Edit</button>
                  <button type="button" style={{ width: '80px', fontWeight: '600' }} class="btn-secondary" onClick={() => deleteTask(task.id)} >Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
}

export default TableBody;

// disabled={task.id === selectedTask?.id ? true : false}
// disabled={task.id === selectedTask?.id ? true : false}