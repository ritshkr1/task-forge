import {useState} from "react";
function AddTask({handleNewTask,selectedTask}) {
    const [task,setTask] = useState(selectedTask ? selectedTask :{
        id: crypto.randomUUID(),
      title: "",
      description: "",
      status: "To-Do",
      priority: "Low",
      deadline: "",
    });

    // if(selectedTask){
    //     setTask(selectedTask);
    // }
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
      status: "To-Do",
      priority: "Low",
      deadline: "",
        })
    }
    function onCancel(){
        handleNewTask(null);
    }
    return <form className="task-form" onSubmit={onSubmitForm}>
        <label>Title</label>
        <input type="text" value={task.title} onChange={(e)=> updateTask(e.target.value,'title')}/>
        <label>Description</label>
        <input type="text" value={task.description} onChange={(e)=> updateTask(e.target.value,'description')}/>
        <label>Status</label>
        <select value={task.status} onChange={(e)=> updateTask(e.target.value,'status')}>
            <option value="To-Do">To-Do</option>
            <option value="In-Progress">In-progress</option>
            <option value="Done">Done</option>
        </select>
        <label>Priority</label>
        <select value={task.priority} onChange={(e)=> updateTask(e.target.value,'priority')}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <label>Deadline</label>
        <input className="date-input" type="date"  value={task.deadline} onChange={(e)=> updateTask(e.target.value,'deadline')}/>
        <div class="form-actions">
            <button type="submit">Save</button>
            <button type="button" class="btn-secondary" onClick={onCancel}>Cancel</button>
        </div>

    </form>

}
export default AddTask;