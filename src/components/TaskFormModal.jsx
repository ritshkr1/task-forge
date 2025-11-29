import { useState } from "react";
import Modal from './common/Modal.jsx'
import PriorityLabel from "./priorityLabel.js";
import StatusLabel from "./statusLabel.js";
function TaskFormModal({ handleNewTask, selectedTask, mode = 'add', handleKanbanEdit }) {
    const [task, setTask] = useState(selectedTask ? selectedTask : {
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
    function updateTask(value, field) {
        setTask((task) => ({ ...task, [field]: value }))
        // [field]), which is known as a computed property and without this create key with 'field'
    }
    function onSubmitForm(e) {
        // e.preventDefault();
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
    function handleEditKanban() {
        handleKanbanEdit(selectedTask.id);
    }
    function onCancel() {
        handleNewTask(null);
    }
    return mode === 'view' ? (
        <Modal open={true} onClose={onCancel} title={'View Task'} primaryText="Edit" onPrimary={handleEditKanban} secondaryText="Close">
            <div class="view-modal">
                <div class="view-modal-content">

                    {/* LEFT COLUMN */}
                    <div class="vm-left">
                        <h2 class="vm-title">{task.title}</h2>

                        <div class="vm-section">
                            <h3>Description</h3>
                            <p class="vm-text">{task.description}</p>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div class="vm-right">

                        <div class="vm-card">
                            <div class="vm-detail-row">
                                <span class="vm-label">Status</span>
                                <span class="vm-value">
                                    <StatusLabel status={task.status} /></span>
                            </div>

                            <div class="vm-detail-row">
                                <span class="vm-label">Priority</span>
                                <span class="vm-value">
                                    <PriorityLabel priority={task.priority} />
                                </span>
                            </div>

                            <div class="vm-detail-row">
                                <span class="vm-label">Due Date</span>
                                <span class="vm-value vm-highlight">{task.deadline}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Modal>
    ) : (
        <Modal open={true} onClose={onCancel} primaryText={'Save'} title={'Task Modal'} onPrimary={onSubmitForm}>
            <div className='modal-field'><label>Title</label>
                <input type="text" value={task.title} onChange={(e) => updateTask(e.target.value, 'title')} /></div>
            <div className='modal-field'><label>Description</label>
                <input type="text" value={task.description} onChange={(e) => updateTask(e.target.value, 'description')} /></div>
            <div className='modal-field'><label>Status</label>
                <select value={task.status} onChange={(e) => updateTask(e.target.value, 'status')}>
                    <option value="To-Do">To-Do</option>
                    <option value="In-Progress">In-progress</option>
                    <option value="Done">Done</option>
                </select></div>
            <div className='modal-field'><label>Priority</label>
                <select value={task.priority} onChange={(e) => updateTask(e.target.value, 'priority')}>
                    <option value="High" >High</option>
                    <option value="Medium" >Medium</option>
                    <option value="Low" >Low</option>
                </select></div>
            <div className='modal-field'><label>Deadline</label>
                <input className="date-input" type="date" value={task.deadline} onChange={(e) => updateTask(e.target.value, 'deadline')} /></div>
        </Modal>
    );

}
export default TaskFormModal;