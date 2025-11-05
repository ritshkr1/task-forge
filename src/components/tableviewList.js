function TableList({tasks,deleteTask,editTask}){
    return  <main>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
                  {task.priority}
                </td>
                <td>{task.deadline}</td>
                <td>
                   <div class="edit-actions">
            <button type="submit" onClick={() => editTask(task.id)}>Edit</button>
            <button type="button" class="btn-secondary" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
}

export default TableList;