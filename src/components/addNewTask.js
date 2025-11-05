import {useState} from "react";
function AddTask({handleNewTask}) {
    const [task,setTask] = useState({
        id: crypto.randomUUID(),
      title: "",
      description: "",
      status: "Created",
      priority: "Low",
      deadline: "",
    });
    function updateTask(value,field){
        setTask((task) => ({...task,[field]:value}))
        // [field]), which is known as a computed property and without this create key with 'field'
    }
    function onSubmitForm(e) {
        e.preventDefault();
        handleNewTask(task);
        setTask({
            id: crypto.randomUUID(),
      title: "",
      description: "",
      status: "Created",
      priority: "Low",
      deadline: "",
        })
    }
    return <form className="task-form" onSubmit={onSubmitForm}>
        <label>Title</label>
        <input type="text" value={task.title} onChange={(e)=> updateTask(e.target.value,'title')}/>
        <label>Description</label>
        <input type="text" value={task.description} onChange={(e)=> updateTask(e.target.value,'description')}/>
        <label>Status</label>
        <select value={task.status} onChange={(e)=> updateTask(e.target.value,'status')}>
            <option value="Created">Created</option>
            <option value="In-progress">In-progress</option>
            <option value="Done">Done</option>
        </select>
        <label>Priority</label>
        <select value={task.priority} onChange={(e)=> updateTask(e.target.value,'priority')}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <label>Deadline</label>
        <input type="date"  value={task.deadline} onChange={(e)=> updateTask(e.target.value,'deadline')}/>
        <div class="form-actions">
            <button type="submit">Save</button>
            <button type="button" class="btn-secondary">Cancel</button>
        </div>

    </form>

}
export default AddTask;