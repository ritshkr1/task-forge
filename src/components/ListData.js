export const ListData = [
  {
    "id": "1",
    "title": "Initialize React project with Vite",
    "description": "Scaffold the initial application using Vite with React and SWC. Ensure package.json scripts are set up for dev, build, and preview.",
    "status": "DONE",
    "comments": 2,
    "commentsList": [
      {
        "id": "c1-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": " decided to use Vite instead of CRA for better performance.",
        "created": "Dec 1, 2025 10:30 AM"
      },
      {
        "id": "c1-2",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Initial commit pushed to main branch.",
        "created": "Dec 1, 2025 11:15 AM"
      }
    ],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 1, 2025",
    "dueDateWarning": false,
    "priority": "highest",
    "labels": ["setup", "config"],
    "created": "Dec 1, 2025",
    "updated": "Dec 2, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "2",
    "title": "Configure ESLint and Prettier",
    "description": "Set up code linting and formatting rules to ensure code consistency. Add .prettierrc and .eslintrc files.",
    "status": "DONE",
    "comments": 0,
    "commentsList": [],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 2, 2025",
    "dueDateWarning": false,
    "priority": "medium",
    "labels": ["dx"],
    "created": "Dec 1, 2025",
    "updated": "Dec 2, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "3",
    "title": "Setup React Router DOM",
    "description": "Install react-router-dom and configure the main routing file. Create placeholders for Home, Login, and Dashboard routes.",
    "status": "DONE",
    "comments": 1,
    "commentsList": [
      {
        "id": "c3-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Going with the new Data Router (createBrowserRouter) API.",
        "created": "Dec 3, 2025 02:00 PM"
      }
    ],
    "assignee": null,
    "dueDate": "Dec 5, 2025",
    "dueDateWarning": false,
    "priority": "high",
    "labels": ["routing"],
    "created": "Dec 3, 2025",
    "updated": "Dec 5, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "4",
    "title": "Create Application Layout (Sidebar + Navbar)",
    "description": "Develop the main shell of the application. The sidebar should be collapsible and the navbar should contain the user profile dropdown.",
    "status": "IN PROGRESS",
    "comments": 5,
    "commentsList": [
      {
        "id": "c4-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Sidebar width fixed at 240px.",
        "created": "Dec 11, 2025 09:00 AM"
      },
      {
        "id": "c4-2",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Need to fix the z-index issue with the navbar.",
        "created": "Dec 12, 2025 10:30 AM"
      },
      {
        "id": "c4-3",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Added transition effects for the collapse action.",
        "created": "Dec 13, 2025 04:15 PM"
      },
      {
        "id": "c4-4",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Updated icons to use lucide-react.",
        "created": "Dec 15, 2025 11:20 AM"
      },
      {
        "id": "c4-5",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Responsive check failed on mobile view. Needs adjustment.",
        "created": "Dec 18, 2025 01:00 PM"
      }
    ],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 20, 2025",
    "dueDateWarning": true,
    "priority": "highest",
    "labels": ["ui", "layout"],
    "created": "Dec 10, 2025",
    "updated": "Dec 18, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "5",
    "title": "Implement Dark Mode Theme Context",
    "description": "Create a ThemeContext to manage light/dark mode state. Persist user preference in localStorage.",
    "status": "IN PROGRESS",
    "comments": 3,
    "commentsList": [
      {
        "id": "c5-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Context created, need to wrap the App component.",
        "created": "Dec 13, 2025 03:30 PM"
      },
      {
        "id": "c5-2",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Found a flicker issue on page load when reading from localStorage.",
        "created": "Dec 15, 2025 09:45 AM"
      },
      {
        "id": "c5-3",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Added Tailwind 'dark' class logic.",
        "created": "Dec 19, 2025 05:00 PM"
      }
    ],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 22, 2025",
    "dueDateWarning": true,
    "priority": "medium",
    "labels": ["theme", "ui"],
    "created": "Dec 12, 2025",
    "updated": "Dec 20, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "6",
    "title": "Build 'Create Task' Modal Form",
    "description": "Design the form for adding new tasks. Fields include Title, Priority, Status, Assignee, and Date.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": null,
    "dueDateWarning": false,
    "priority": "high",
    "labels": ["feature", "forms"],
    "created": "Dec 15, 2025",
    "updated": "Dec 15, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "7",
    "title": "Design Drag and Drop Board logic",
    "description": "Implement the Kanban board drag-and-drop functionality to move tasks between columns.",
    "status": "TODO",
    "comments": 8,
    "commentsList": [
      {
        "id": "c7-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Researching libraries: dnd-kit vs react-beautiful-dnd.",
        "created": "Dec 15, 2025 10:00 AM"
      },
      {
        "id": "c7-2",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "dnd-kit seems more modern and modular.",
        "created": "Dec 15, 2025 11:00 AM"
      },
      {
        "id": "c7-3",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Need to handle state updates optimistically.",
        "created": "Dec 15, 2025 11:30 AM"
      },
      {
        "id": "c7-4",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Concern: How to handle drag on mobile devices?",
        "created": "Dec 15, 2025 01:00 PM"
      },
      {
        "id": "c7-5",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Drafted initial data structure for the columns.",
        "created": "Dec 15, 2025 02:45 PM"
      },
      {
        "id": "c7-6",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Need to figure out the drop animation.",
        "created": "Dec 15, 2025 04:00 PM"
      },
      {
        "id": "c7-7",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Will require a custom drag overlay component.",
        "created": "Dec 15, 2025 05:15 PM"
      },
      {
        "id": "c7-8",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Checking accessibility (keyboard support) for dnd-kit.",
        "created": "Dec 15, 2025 06:30 PM"
      }
    ],
    "assignee": null,
    "dueDate": "Jan 10, 2026",
    "dueDateWarning": false,
    "priority": "highest",
    "labels": ["complex", "feature"],
    "created": "Dec 15, 2025",
    "updated": "Dec 15, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "8",
    "title": "Integrate Firebase Authentication",
    "description": "Set up Firebase project and implement Login/Signup using Email/Password and Google Auth.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": null,
    "dueDateWarning": false,
    "priority": "high",
    "labels": ["backend", "auth"],
    "created": "Dec 16, 2025",
    "updated": "Dec 16, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "9",
    "title": "Create reusable Button and Input components",
    "description": "Build atomic components for Buttons and Inputs with variant support (primary, secondary, outline, ghost).",
    "status": "DONE",
    "comments": 0,
    "commentsList": [],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 8, 2025",
    "dueDateWarning": false,
    "priority": "low",
    "labels": ["ui-kit"],
    "created": "Dec 5, 2025",
    "updated": "Dec 8, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "10",
    "title": "Fix overflow issue in Sidebar",
    "description": "Sidebar content gets cut off on smaller screens. Need to implement a custom scrollbar.",
    "status": "IN PROGRESS",
    "comments": 1,
    "commentsList": [
      {
        "id": "c10-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Tried overflow-y-auto but the scrollbar looks ugly. Need to style it.",
        "created": "Dec 19, 2025 03:00 PM"
      }
    ],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 21, 2025",
    "dueDateWarning": true,
    "priority": "medium",
    "labels": ["bug", "css"],
    "created": "Dec 19, 2025",
    "updated": "Dec 20, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "11",
    "title": "Set up Redux Toolkit for state management",
    "description": "Configure the Redux store, install RTK Query, and create initial slices for tasks and user data.",
    "status": "DONE",
    "comments": 2,
    "commentsList": [
      {
        "id": "c11-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Store configured. Added TypeScript types for RootState.",
        "created": "Dec 7, 2025 10:00 AM"
      },
      {
        "id": "c11-2",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Decided to keep UI state (like modal open) local, not global.",
        "created": "Dec 9, 2025 02:20 PM"
      }
    ],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 10, 2025",
    "dueDateWarning": false,
    "priority": "highest",
    "labels": ["state", "setup"],
    "created": "Dec 6, 2025",
    "updated": "Dec 10, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "12",
    "title": "Create 404 Not Found Page",
    "description": "Design a friendly error page with a button redirecting back to the Dashboard.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": null,
    "dueDateWarning": false,
    "priority": "lowest",
    "labels": ["ui"],
    "created": "Dec 18, 2025",
    "updated": "Dec 18, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "13",
    "title": "Refactor Project Card Component",
    "description": "Clean up the code in ProjectCard.tsx. Extract sub-components for AvatarGroup and ProgressBar.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": null,
    "dueDateWarning": false,
    "priority": "low",
    "labels": ["refactor"],
    "created": "Dec 18, 2025",
    "updated": "Dec 18, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "14",
    "title": "Implement Task Filtering by Assignee",
    "description": "Add logic to the dashboard to filter visible tasks based on the selected user avatar.",
    "status": "TODO",
    "comments": 4,
    "commentsList": [
      {
        "id": "c14-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Should this filter persist in the URL query params?",
        "created": "Dec 20, 2025 10:00 AM"
      },
      {
        "id": "c14-2",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Yes, using searchParams makes it shareable.",
        "created": "Dec 20, 2025 10:05 AM"
      },
      {
        "id": "c14-3",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Need a 'Clear All' filters button.",
        "created": "Dec 20, 2025 11:00 AM"
      },
      {
        "id": "c14-4",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Added useSearchParams hook.",
        "created": "Dec 20, 2025 12:30 PM"
      }
    ],
    "assignee": null,
    "dueDate": "Jan 5, 2026",
    "dueDateWarning": false,
    "priority": "medium",
    "labels": ["feature"],
    "created": "Dec 20, 2025",
    "updated": "Dec 20, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "15",
    "title": "Add loading skeletons for dashboard",
    "description": "Create a skeleton loader component to display while data is being fetched from the backend.",
    "status": "IN PROGRESS",
    "comments": 0,
    "commentsList": [],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 25, 2025",
    "dueDateWarning": false,
    "priority": "medium",
    "labels": ["ux"],
    "created": "Dec 21, 2025",
    "updated": "Dec 21, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "16",
    "title": "Research chart libraries for Analytics",
    "description": "Evaluate Recharts vs Chart.js for the project analytics page.",
    "status": "DONE",
    "comments": 1,
    "commentsList": [
      {
        "id": "c16-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Selected Recharts because it's built specifically for React.",
        "created": "Dec 14, 2025 09:00 AM"
      }
    ],
    "assignee": { "name": "Ritesh Kumar", "avatar": "RK" },
    "dueDate": "Dec 14, 2025",
    "dueDateWarning": false,
    "priority": "low",
    "labels": ["research"],
    "created": "Dec 12, 2025",
    "updated": "Dec 14, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "17",
    "title": "Implement search functionality in header",
    "description": "Add a global search bar in the header to find tasks by title or ID.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": null,
    "dueDateWarning": false,
    "priority": "medium",
    "labels": ["feature"],
    "created": "Dec 20, 2025",
    "updated": "Dec 20, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "18",
    "title": "Write unit tests for utility functions",
    "description": "Add Jest/Vitest tests for date formatters and string manipulation helpers.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": "Jan 15, 2026",
    "dueDateWarning": false,
    "priority": "high",
    "labels": ["testing"],
    "created": "Dec 21, 2025",
    "updated": "Dec 21, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "19",
    "title": "Optimize bundle size",
    "description": "Analyze the build bundle and implement lazy loading for routes to reduce initial load time.",
    "status": "TODO",
    "comments": 1,
    "commentsList": [
      {
        "id": "c19-1",
        "author": { "name": "Ritesh Kumar", "avatar": "RK" },
        "text": "Lodash is taking up too much space. Need to switch to explicit imports.",
        "created": "Dec 21, 2025 04:00 PM"
      }
    ],
    "assignee": null,
    "dueDate": null,
    "dueDateWarning": false,
    "priority": "low",
    "labels": ["performance"],
    "created": "Dec 21, 2025",
    "updated": "Dec 21, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  },
  {
    "id": "20",
    "title": "Deploy initial version to Vercel",
    "description": "Connect the GitHub repo to Vercel and trigger the first production deployment.",
    "status": "TODO",
    "comments": 0,
    "commentsList": [],
    "assignee": null,
    "dueDate": "Jan 1, 2026",
    "dueDateWarning": false,
    "priority": "highest",
    "labels": ["deployment"],
    "created": "Dec 22, 2025",
    "updated": "Dec 22, 2025",
    "reporter": { "name": "Ritesh Kumar", "avatar": "RK" }
  }
];