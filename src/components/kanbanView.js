export default function KanbanView({tasks}){
    const tabsName = ["To-Do","In-Progress","Done"];
    return <main>
  <div class="kanban-container">
   {tabsName.map((name) => (
  <KanbanColumn key={name} status={name} tasks={tasks} />
))}
  </div>
</main>

}
function KanbanColumn({tasks,status}){
    let titleName = ""
    let classStyleName = ""
    if(status === "To-Do"){
        titleName = "To Do"
        classStyleName ="todo"
    } else if(status === "In-Progress"){
        titleName = "In Progress"
        classStyleName ="inprogress"
    }else {
        titleName = "Done"
        classStyleName ="done"
    }
    const columnClass = `kanban-column ${classStyleName}`
    return <div className={columnClass}>
      <h3>{titleName}</h3>
      {tasks.filter((task) => task.status === status).map((task) => <KanbanCard priority={task.priority}>{task.title}</KanbanCard>)}
      {/* {children} */}
    </div>
}

function KanbanCard({children,priority}){
    const className = `priority priority-${priority.toLowerCase()}`;
    return <div className="kanban-card">
        <p className="task-title">{children}</p>
        <span className={className}>{priority}</span>
      </div>
}