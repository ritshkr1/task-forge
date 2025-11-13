import Layout from "./components/layout";
const initialTasks = [
  { id: 1, title: "Design homepage", description: "Create responsive layout and hero section", status: "To-Do", priority: "High", deadline: "2025-11-08" },
  { id: 2, title: "Setup local storage", description: "Implement persistence for task data", status: "In-Progress", priority: "Medium", deadline: "2025-11-10" },
  { id: 3, title: "Polish UI", description: "Add hover states and spacing improvements", status: "Done", priority: "Low", deadline: "2025-11-12" },
  { id: 4, title: "Create login form", description: "Add validation and error messages", status: "To-Do", priority: "High", deadline: "2025-11-09" },
  { id: 5, title: "Integrate API", description: "Connect frontend with backend endpoints", status: "In-Progress", priority: "High", deadline: "2025-11-11" },
  { id: 6, title: "Write unit tests", description: "Cover main components with Jest", status: "To-Do", priority: "Medium", deadline: "2025-11-14" },
  { id: 7, title: "Optimize images", description: "Compress assets for faster load", status: "Done", priority: "Low", deadline: "2025-11-07" },
  { id: 8, title: "Setup routing", description: "Implement React Router navigation", status: "In-Progress", priority: "Medium", deadline: "2025-11-13" },
  { id: 9, title: "Add tooltips", description: "Enhance UX for action buttons", status: "To-Do", priority: "Low", deadline: "2025-11-15" },
  { id: 10, title: "Create sidebar menu", description: "Implement collapsible menu", status: "Done", priority: "Medium", deadline: "2025-11-08" },
  { id: 11, title: "Setup dark mode", description: "Add toggle with CSS variables", status: "To-Do", priority: "High", deadline: "2025-11-16" },
  { id: 12, title: "Fix table responsiveness", description: "Ensure mobile-friendly layout", status: "In-Progress", priority: "Medium", deadline: "2025-11-12" },
  { id: 13, title: "Implement search filter", description: "Add real-time filtering for tasks", status: "Done", priority: "High", deadline: "2025-11-10" },
  { id: 14, title: "Create task form", description: "Add inputs and validation", status: "To-Do", priority: "Medium", deadline: "2025-11-18" },
  { id: 15, title: "Setup notifications", description: "Show toast messages on actions", status: "In-Progress", priority: "Low", deadline: "2025-11-14" },
  { id: 16, title: "Add drag-and-drop", description: "Reorder tasks between columns", status: "To-Do", priority: "High", deadline: "2025-11-20" },
  { id: 17, title: "Document components", description: "Add comments and usage examples", status: "Done", priority: "Medium", deadline: "2025-11-09" },
  { id: 18, title: "Setup CI/CD", description: "Automate deployment workflow", status: "In-Progress", priority: "High", deadline: "2025-11-17" },
  { id: 19, title: "Add profile page", description: "Show user details and settings", status: "To-Do", priority: "Medium", deadline: "2025-11-21" },
  { id: 20, title: "Refactor code", description: "Clean up redundant logic and components", status: "Done", priority: "Low", deadline: "2025-11-11" }
];

function App() {
  return <Layout initialTasks={initialTasks}/>;
}

export default App;