import PriorityLabel from "./priorityLabel";
import StatusLabel from "./statusLabel";
function TableBody({tasks,editTask,deleteTask}){
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
                <PriorityLabel priority={task.priority}/>
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

export default TableBody;

// disabled={task.id === selectedTask?.id ? true : false}
// disabled={task.id === selectedTask?.id ? true : false}