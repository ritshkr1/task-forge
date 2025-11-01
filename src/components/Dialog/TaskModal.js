import { useState } from "react";
import "./Modal.css";

export default function TaskModal({isOpen, handleModel,handleNewTask}) {
  const [task, setTask] = useState({
    name: "",
    status: "",
    priority: "",
    dueDate: "",
    assignee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'name' || name === 'assignee') {
    setTask({ ...task, [name]: value.toUpperCase() });
    }else{

      setTask({ ...task, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTask(task);
    handleModel();
  };

  return (
    <div className="task-container">
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Task Name:
                <input
                  type="text"
                  name="name"
                  value={task.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Status:
                <select name="status" value={task.status} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </label>

              <label>
                Priority:
                <select
                  name="priority"
                  value={task.priority}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>

              <label>
                Due Date:
                <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                />
              </label>

              <label>
                Assignees:
                <input
                  type="text"
                  name="assignee"
                  value={task.assignee}
                  onChange={handleChange}
                  placeholder="Comma separated"
                />
              </label>

              <div className="modal-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={handleModel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
