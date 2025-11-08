function TableList({ children}) {
  return <main>
    <div className="table-container">
      <table>
        {children}
      </table>
    </div>
  </main>
}



export default TableList;