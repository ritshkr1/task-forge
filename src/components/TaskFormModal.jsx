import { useState } from "react";
import Modal from './common/Modal.jsx'
import PriorityLabel from "./common/PriorityLabel.jsx";
import StatusLabel from "./common/StatusLabel.jsx";
import InputField from "./common/InputField.jsx";
import SelectField from "./common/SelectField.jsx";
import DateField from "./common/DateField.jsx";
import { optionPriority, optionStatus } from "../data.js";
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
        setTask((task) => task = { ...task, [field]: value })

        // [field]), which is known as a computed property and without this create key with 'field'
    }
    function onSubmitForm(e) {
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
                <InputField input={task.title} setInput={(v) => updateTask(v, 'title')} placeholder={'Title...'} label={'Title'} />
                <InputField input={task.description} setInput={(v) => updateTask(v, 'description')} placeholder={'Description...'} label={'Description'} />

                <SelectField label={'Status'} input={task.status} setInput={(v) => updateTask(v, 'status')} optionItems={optionStatus} />

                <SelectField label={'Priority'} input={task.priority} setInput={(v) => updateTask(v, 'priority')} optionItems={optionPriority} />

                <DateField label={'Deadline'} input={task.deadline} setInput={(v) => updateTask(v, 'deadline')} placeholder={'DeadLine...'} />
        </Modal>
    );

}
export default TaskFormModal;