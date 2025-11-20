import {useState} from "react";
import PriorityLabel from "../components/priorityLabel";
export default function KanbanView({tasks,updateTasks}){
    const tabNames = ["To-Do","In-Progress","Done"];
    const [dropZone,setDropZone] = useState("");
    const [taskId,setTaskId] = useState(null);
    function handleDropData(tabTitle){
      const updatedTasks = tasks.map((task) => {
        if(task.id === taskId){
          return {...task,status:tabTitle}
        }else{
          return {...task}
        }
      });
      updateTasks(updatedTasks);
      setDropZone("")
    }
    function handleUpdateTaskId(id){
      setTaskId((currId) => currId = id);
    }
    return <main>
  <div class="kanban-container">
   {tabNames.map((tabName) => (
  <KanbanColumn key={tabName} tabTitle={tabName} handleDropData={handleDropData} dropZone={dropZone} setDropZone={setDropZone}>
    
      {tasks.filter((task) => task.status === tabName).map((task) => <KanbanCard priority={task.priority} key={task.id} id={task.id} updateId={handleUpdateTaskId} description={task.description}>{task.title}</KanbanCard>)}
     </KanbanColumn>
))}
  </div>
</main>

}
function KanbanColumn({children,tabTitle,handleDropData,dropZone,setDropZone}){ 
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
      console.log("on Drop");
      ;
      handleDropData(tabTitle);
    }
    function handleDragEnter(e){
      console.log('onDragEnter',classStyleName);
      setDropZone((c) => c = tabTitle)
    }
    const columnClass = `kanban-column ${dropZone === tabTitle?'kanban-column-dropzone':''} ${classStyleName}`;
    return <div className={columnClass} onDragEnter={handleDragEnter}
    onDragLeave={e => {console.log('onDragLeave');}}
    onDragOver={e => { e.preventDefault(); console.log('onDragOver',classStyleName);}}
    onDrop={handleDropEvent}>
      <h3>{titleName}
      <div className="kanban-column-count">{children.length}</div>

      </h3>
      {children}
    </div>
}

function KanbanCard({children,priority,description,id,updateId}){
  function handleDragStart(event) {
    updateId(id);
    console.log(id);
  }
    
    return <div className="kanban-card"  draggable={true}
    onDragStart={handleDragStart}>
      <div style={{display:'flex'}}>

        <p style={{width:'85%'}}>{children}</p>
        <PriorityLabel priority={priority} />       
      </div>
        <p className="kanban-card-description">{description}</p>
      </div>
}