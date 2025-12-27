import { createBrowserRouter, RouterProvider,Outlet} from "react-router";
import SummaryDashboard from './components/Dashboard';
import KanbanJiraBoard from './components/JiraKanbanComp';
import ListPage from './components/ListComponent';
import LayoutWrapper from "./layout/LayoutWrapper";

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

export default function RouterCustomComponent() {
    return <RouterProvider router={router} />;
}