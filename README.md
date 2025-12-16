Here is the structured README for **Task Forge**.

# ---

**🚀 Task Forge: A Jira-Inspired Frontend Task Management Application**

## **🌟 Project Overview**

**Task Forge** is a proof-of-concept frontend application designed to showcase a modern, component-driven architecture using React and Tailwind CSS. It simulates the core project management experience of tools like Jira, featuring a customizable workflow (Kanban Board), detailed task listing, and a project dashboard with key metrics.

The primary goal of this project is to demonstrate proficiency in:

* **Component-Based Architecture:** Implementing a clear, reusable component hierarchy using Container/Presentational patterns.  
* **State Management:** Strategic use of React Context for global state and local state for UI concerns.  
* **Data Simulation:** Mimicking real-world asynchronous API calls and data integration on the frontend.  
* **Modern Styling:** Utilizing **Tailwind CSS** for rapid and utility-first styling.  
* **Enterprise Features:** Implementing data visualization (charts) and advanced task interactions (Drag-and-Drop).

## ---

**🛠️ Technical Stack**

* **Framework:** React (Functional Components and Hooks)  
* **Styling:** Tailwind CSS  
* **State Management:** React Context API (with useReducer for potential future scale)  
* **Routing:** React Router DOM  
* **Data Visualization:** *TBD (e.g., Recharts or Chart.js)*  
* **Core Feature Library:** *TBD (e.g., react-beautiful-dnd for Kanban)*

## ---

**🧱 Architectural Design**

### **1\. Data Model & Mock Structure**

The application uses flat JSON structures to manage project entities. Data relationships are maintained using simple ID references.

#### **Core Entities**

| Entity | Description | Key Attributes |
| :---- | :---- | :---- |
| **Project** | High-level container for tasks. | id, name, status, targetDate |
| **Task** | The primary work unit. | id, projectId, title, status (TODO, DONE, etc.), priorityId, estimatedHours |
| **Priority** | Lookup table for consistent styling and sorting. | id, name, color |

#### **Example Task Structure (Excerpt)**

JSON

\[  
  {  
    "id": "TASK-1001",  
    "projectId": "PRJ-1",  
    "title": "Create Mock Data Structures",  
    "status": "DONE",  
    "priorityId": 1,   
    "type": "Story",  
    "estimatedHours": 8,  
    "loggedHours": 6  
  }  
\]

### **2\. Component Hierarchy & Logic**

The application follows a modular structure where container components manage data and state, and presentational components focus purely on rendering UI elements.

---

| Component Group | Examples | Responsibility |
| :---- | :---- | :---- |
| **Root/Context** | TaskForgeApp, TaskForgeContext | Global state initialization, data loading, and API simulation. |
| **Layout** | AppLayout, Sidebar, Header | Handling primary navigation and persistent UI elements. |
| **Containers (Pages)** | DashboardPage, KanbanBoardPage | Fetching/filtering global state, managing view-specific state (sorting, filtering), and passing props to presenters. |
| **Presentational** | TaskCard, TaskListTable, StatsCard | Receiving props and rendering UI. No internal business logic or state beyond basic UI handlers (e.g., onClick). |

### **3\. State Management Strategy**

We employ a focused hybrid approach to maximize performance and simplify data flow:

| State Type | Data | Strategy |
| :---- | :---- | :---- |
| **Global State** | projects, tasks, currentProjectId, isLoading | **React Context API** (Centralized data store). |
| **Local State** | isSidebarOpen, isTaskModalOpen, formInputValues | **useState Hook** (UI-specific state contained within the component). |
| **Derived State** | Sorted/filtered task lists, aggregate metrics (e.g., done task count) | **useMemo Hook** (Calculated based on global state, cached for performance). |

## ---

**🗺️ Implementation Plan (Step-by-Step)**

The project is segmented into four phases, ensuring a stable foundation before tackling complex features.

### **Phase 1: Foundation and Static UI (Routes: /dashboard, /kanban, /list)**

1. Set up React project and configure Tailwind CSS.[Done]
2. Implement static AppLayout, Sidebar, and Header. 
3. Define and implement React Router for the three primary project views.

### **Phase 2: Data Integration and Simulation**

4. Create the **TaskForgeContext** for global state.  
5. Develop the **mockApiService.js** with functions (e.g., fetchTasks()) that include a **setTimeout delay** to simulate network latency and loading states.  
6. Implement global data loading and state population within TaskForgeApp, showing a loading spinner based on isLoading state.

### **Phase 3: Core Views and Interactions**

7. **TaskListTablePage:** Implement the TaskListTable component with basic client-side sorting functionality.  
8. **KanbanBoardPage:** Implement KanbanColumn and TaskCard. Integrate the **Drag-and-Drop library** to enable status changes via column drops (Core Feature).  
9. **Task Management (CRUD):** Build the reusable **TaskModal** component and implement logic to update tasks in the global state, simulating a **PUT/POST** request via the mock API.

### **Phase 4: Pro Features and Polish**

10. **DashboardPage:** Implement StatsCard components to display key project metrics (Task Totals, Completion Rate).  
11. **Data Visualization:** Integrate a charting library and implement the **BurnDownChart** component to visualize sprint/project progress over time (Enterprise Feature).  
12. **Future Scope:** Build the initial layout for the **Timeline/Gantt Chart view** to showcase future development direction.

---

Would you like to focus on the **Kanban Board** implementation next? We can define the specific drag-and-drop logic and state handling required for that feature.