import JiraLayout from './layout/JiraLayout';
import SummaryDashboard from './components/Dashboard'
import KanbanJiraBoard from './components/JiraKanbanComp'
import ListPage from './components/ListComponent';
function App() {

  // return <Layout />;
  return <JiraLayout>
       {/* <SummaryDashboard /> */}
       {/* <KanbanJiraBoard /> */}
       <ListPage />
    </JiraLayout>
}

export default App
