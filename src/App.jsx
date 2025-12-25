import JiraLayout from './layout/JiraLayout';
import SummaryDashboard from './components/Dashboard';
import KanbanJiraBoard from './components/JiraKanbanComp';
import ListPage from './components/ListComponent';
import { CustomModalProvider } from './modal/ModalContext';
import { CommonTaskModal } from './modal/TaskModal';
import { Toaster } from 'react-hot-toast';
import { TaskProvider } from './components/TaskListContext';

// 1. Import Outlet
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// 2. Create a specific component to bridge Layout and Outlet
// This tells React Router: "Render JiraLayout, and put the current page inside it"
const LayoutWrapper = () => {
  return (
    <TaskProvider>
      <CustomModalProvider>
    <JiraLayout>
      <Outlet />
      <Toaster position="top-right"/>
    <CommonTaskModal />
    </JiraLayout>
    </CustomModalProvider>
    </TaskProvider>
    
  );
};

const router = createBrowserRouter([
  {
    // 3. Set the LayoutWrapper as the parent element
    element: <LayoutWrapper />,
    children: [
      // 4. Move your pages inside the children array
      { path: "/", Component: SummaryDashboard },
      { path: "list", Component: ListPage },
      { path: "board", Component: KanbanJiraBoard },
    ]
  }
]);

function App() {
  // 5. App only returns the Provider. The Layout is now handled internally.
  return <RouterProvider router={router} />;
}

export default App;