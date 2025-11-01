import PlaceholderBadge from "./PlaceHolderBadge"

function TableView({tasks}){
    return <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Due</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td>{index + 1}</td>
                  <td>{task.name}</td>
                  <td><PlaceholderBadge color="#6b7280"> {task.status} </PlaceholderBadge></td>
                  <td><PlaceholderBadge color="var(--color-accent)" > {task.priority} </PlaceholderBadge></td>
                  <td>{task.dueDate}</td>
                  <td>{task.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
}

export default TableView