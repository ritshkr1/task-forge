import Layout from "./pages/layout";
import { TASKS_DATA } from "./data";

function App() {
  return <Layout initialTasks={TASKS_DATA} />;
}

export default App;