import {useState} from "react";
export default function KanbanView({tasks,updateTasks}){
    const tabNames = ["To-Do","In-Progress","Done"];
    const [taskId,setTaskId] = useState(null);
    function handleDropData(tabTitle){
      console.log(tabTitle,taskId);
      const updatedTasks = tasks.map((task) => {
        if(task.id === taskId){
          return {...task,status:tabTitle}
        }else{
          return {...task}
        }
      });
      updateTasks(updatedTasks)
    }
    function handleUpdateTaskId(id){
      setTaskId((currId) => currId = id);
    }
    return <main>
  <div class="kanban-container">
   {tabNames.map((tabName) => (
  <KanbanColumn key={tabName} tabTitle={tabName} handleDropData={handleDropData}>
    
      {tasks.filter((task) => task.status === tabName).map((task) => <KanbanCard priority={task.priority} key={task.id} id={task.id} updateId={handleUpdateTaskId}>{task.title}</KanbanCard>)}
     </KanbanColumn>
))}
  </div>
</main>

}
function KanbanColumn({children,tabTitle,handleDropData}){
    let titleName = ""
    let classStyleName = ""
    if(tabTitle === "To-Do"){
        titleName = "To Do"
        classStyleName ="todo"
    } else if(tabTitle === "In-Progress"){
        titleName = "In Progress"
        classStyleName ="inprogress"
    }else {
        titleName = "Done"
        classStyleName ="done"
    }
    function handleDropEvent(){
      console.log("on Drop")
      handleDropData(tabTitle);
    }
    const columnClass = `kanban-column ${classStyleName}`
    return <div className={columnClass} onDragEnter={e => console.log('onDragEnter',classStyleName)}
    onDragLeave={e => console.log('onDragLeave')}
    onDragOver={e => { e.preventDefault(); console.log('onDragOver',classStyleName); }}
    onDrop={handleDropEvent}>
      <h3>{titleName}</h3>
      {children}
    </div>
}

function KanbanCard({children,priority,id,updateId}){
  function handleDragStart(event) {
    updateId(id);
    console.log(id);
  }
    const className = `priority priority-${priority.toLowerCase()}`;
    return <div className="kanban-card" draggable={true}
    onDragStart={handleDragStart}>
        <p className="task-title">{children}</p>
        <span className={className}>{priority}</span>
      </div>
}