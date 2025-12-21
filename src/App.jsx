import JiraLayout from './layout/JiraLayout';
import Layout from './layout/Layout'
// import { TASKS_DATA } from './data'
function App() {

  // return <Layout />;
  return <JiraLayout>
       {/* This is where your specific page content (Dashboard, Board, etc.) goes */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example placeholder content matching your screenshot */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
             <h3 className="font-semibold text-gray-700 mb-4">Status Overview</h3>
             <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                Chart Placeholder
             </div>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm">
             <h3 className="font-semibold text-gray-700 mb-4">Recent Activity</h3>
             <p className="text-gray-500 text-sm">No activity yet.</p>
          </div>
       </div>
    </JiraLayout>
}

export default App
