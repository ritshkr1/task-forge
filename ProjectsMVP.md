Task Forge = mini-Jira, built right: feature-based React app, Redux Toolkit (RTK) for state, React Router, DnD engine, clear storage adapter (local first, backend-friendly), full accessibility, testing, CI/CD, deployable to Vercel. Build *reusable primitives* and you’ll reuse them forever.

---

# **THE CHECKLIST LIST (from zero to portfolio-ready)**

## **PHASE 1 — Project Spine (foundation)**

You cannot skip these unless you enjoy chaos.

### **1. Project Setup**

* [ ] Create React project
* [ ] Configure folder structure
* [ ] Install RTK, Router, DnD kit
* [ ] Add ESLint, Prettier, absolute imports
* [ ] Add global CSS variables and theme tokens

### **2. Task Data Foundations**

* [ ] Define `Task` model (id, title, description, status, priority, dates)
* [ ] Create RTK slice for tasks
* [ ] Add reducers: add, update, delete
* [ ] Add entity adapter for normalized state
* [ ] Unit test reducers

### **3. Storage Layer (local-first)**

* [ ] Create storage adapter interface
* [ ] Implement LocalStorage version
* [ ] Hydrate tasks on app load
* [ ] Persist tasks with debounce
* [ ] Add fallback empty state UI

---

## **PHASE 2 — Core App Experience**

This is where Task Forge becomes functional.

### **4. Kanban Board**

* [ ] Build board layout (3 columns)
* [ ] Create `Column` component
* [ ] Create `TaskCard` component
* [ ] Show tasks by column
* [ ] Add Quick Add input in each column
* [ ] Add basic styling + counts

### **5. Drag & Drop**

* [ ] Install & set up `@dnd-kit`
* [ ] Add draggable task cards
* [ ] Add droppable columns
* [ ] Implement moveTask reducer action
* [ ] Support reorder within the same column
* [ ] Smooth animation + placeholder ghost

---

## **PHASE 3 — Task Details (User Feels It's Real)**

This is when your app stops looking like "student work".

### **6. Task Modal**

* [ ] Build modal primitive (focus trap, ESC close)
* [ ] Show modal on card click
* [ ] Add form: title, description, priority, due date
* [ ] Add autosave on field blur
* [ ] Deep-link route `/task/:id`
* [ ] Edit in full modal view
* [ ] Add delete with confirmation

### **7. Inline Edit**

* [ ] Double-click title on card
* [ ] Convert to input
* [ ] Autosave
* [ ] Blur to exit
* [ ] Escape to cancel

---

## **PHASE 4 — Filters, Sorting & Power Tools**

Recruiters LOVE this part because it's rare in student projects.

### **8. Filters Panel**

* [ ] Search by text
* [ ] Filter by status
* [ ] Filter by priority
* [ ] Add sort: date, priority
* [ ] Badge indicators for active filters
* [ ] Memoized selector for visible tasks

### **9. Undo System**

* [ ] Undo buffer in UI slice
* [ ] Delete task triggers toast
* [ ] Click restore returns the task
* [ ] Auto-expire undo after 6s

### **10. Toast System**

* [ ] Toast container
* [ ] Success/Warning/Error styles
* [ ] Programmatic API (`showToast()`)
* [ ] Animations

---

## **PHASE 5 — UX Polish (this makes it portfolio-ready)**

### **11. Theme System**

* [ ] Theme slice (light/dark)
* [ ] Persist in storage
* [ ] Add toggle button
* [ ] System preference detection

### **12. Accessibility**

* [ ] ARIA roles for list and cards
* [ ] Keyboard shortcuts (open modal, add task)
* [ ] Focus rings for everything
* [ ] Keyboard drag & drop fallback

### **13. Responsive Layout**

* [ ] Mobile stacked view
* [ ] Tablet two-column view
* [ ] Desktop three-column fixed layout

### **14. Animations**

* [ ] Card hover
* [ ] Modal open/close
* [ ] Column highlight on drag-over
* [ ] Toast slide-in

---

## **PHASE 6 — Analytics & Extras**

This is where you flex.

### **15. Analytics Widget**

* [ ] Count tasks completed this week
* [ ] Show overdue tasks
* [ ] Progress bar % done
* [ ] Trend line or sparkline

### **16. Bulk Actions**

* [ ] Multi-select tasks
* [ ] Batch delete
* [ ] Batch change priority/status

---

## **PHASE 7 — Infrastructure (the parts devs forget)**

### **17. Unit Tests**

* [ ] Tasks slice
* [ ] Filters selectors
* [ ] Undo logic

### **18. Integration Tests**

* [ ] Add task
* [ ] Edit task
* [ ] Drag task
* [ ] Delete + undo

### **19. E2E Test**

* [ ] Full flow: create → drag → edit → filter → delete → undo

### **20. CI/CD**

* [ ] Setup GitHub Actions
* [ ] Lint on PR
* [ ] Run tests
* [ ] Auto deploy to Vercel on merge

---

## **PHASE 8 — Portfolio Polish (the final wrap)**

### **21. README**

* [ ] Clear architecture diagram
* [ ] Tech decisions
* [ ] “Hard problems solved”
* [ ] Screenshots + GIFs
* [ ] Live demo link

### **22. Performance**

* [ ] Virtualize task lists
* [ ] Memoize heavy components
* [ ] useCallback + useMemo everywhere needed
* [ ] Lazy load modal route

### **23. Error Handling**

* [ ] Fallback UI
* [ ] Try/catch around persistence
* [ ] Graceful offline handling

---

# 1 — System architecture (high level)

Text diagram because diagrams are fancy and recruiters like them:

```
Browser (React SPA)
  ├─ UI Layer (components, pages)
  ├─ Routing (React Router)
  ├─ Feature Modules
  │    ├─ Tasks (RTK slice)
  │    ├─ Board (DnD + columns)
  │    ├─ Filters (slice/selectors)
  │    ├─ Analytics (selectors + microwidgets)
  │    └─ Theme/UI (slice)
  ├─ Services
  │    ├─ storageAdapter (LocalStorage -> API)
  │    ├─ syncService (debounce/throttle, conflict resolution)
  │    └─ notifications (toasts)
  ├─ Integration Layer (optional)
  │    ├─ REST / GraphQL client adapters
  │    └─ Auth (if needed)
  └─ Dev Infra
       ├─ tests (unit, integration, e2e)
       ├─ CI/CD (lint/test/build/deploy)
       └─ observability (sentry, logs, metrics)
```

Key design principles: 
- feature-based modules, 
- single source of truth (RTK), 
- adapter pattern for persistence, 
- selectors for computed derived state, 
- components split into primitives/containers/pages.

---

# 2 — Core responsibilities & system design decisions

* **Local-first**: app works offline, persists to LocalStorage. Storage adapter abstracts persistence so you can plug in Supabase/Firebase later.
* **State**: Redux Toolkit with slices per feature (tasks, ui, filters, theme, board). Use `createEntityAdapter` for tasks for performant CRUD and selectById patterns.
* **DnD**: `@dnd-kit` preferred (modern + flexible). Keep DnD logic separated from task reducers — DnD emits reorder/move actions that reducers interpret.
* **Routing**: React Router v6. Support deep links `/task/:id` and modal routes.
* **Selectors**: Compose filter+search+sort pipelines using memoized selectors (reselect or RTK’s `createSelector`).
* **Undo**: Implement undo buffer in UI slice; deletion pushes to buffer with ttl.
* **Accessibility**: Keyboard DnD fallback, proper roles, focus traps in modals, high-contrast theme.
* **Performance**: memoize heavy selectors, virtualize lists if tasks count > 200, debounce persistence.
* **Testing**: unit tests for reducers/selectors, RTL for components, Cypress/Playwright for e2e.
* **CI/CD**: lint, test, build, deploy on push; PR checks.
* **Observability**: Sentry for runtime errors, simple metrics (task count changes) for analytics.

---

# 3 — What features I have build

## 10 MVP features (ship fast, recruiters care)

1. **Task CRUD** (full create/edit/delete with required validation)
2. **Kanban Board** (Todo / In Progress / Done) with drag-and-drop between columns
3. **Local Persistence Adapter** (LocalStorage + hydration on load + throttled save)
4. **Task Modal + Deep-Linking** (`/task/:id`) and inline edit fallback
5. **Quick-Add Input per Column** (fast capture)
6. **Filter & Search Panel** (text search, status filter, priority filter)
7. **Undo Delete (Toast)** with 6s TTL restore
8. **Sorting & Reorder within column** (by priority/due date + manual reorder)
9. **Theme Toggle** (light/dark persisted) and basic responsive layout
10. **README + Live Demo Deploy** (Vercel) + GIF of core flow

## 20 Mini reusable feature topics (components / features you’ll reuse across frontends)

1. **Card UI primitive** (title, meta row, actions)
2. **Modal primitive** (focus trap, accessibility)
3. **Toast service** (global toast container + API)
4. **Form primitive** (input, date-picker, select, validation messages)
5. **Button / IconButton / Icon system** (SVG + accessible)
6. **Dropdown / Multi-select** (with keyboard nav)
7. **Editable inline input** (double-click to edit, autosave)
8. **Tag/Badge component** (priority, status)
9. **Skeleton loader** (for perceived performance)
10. **Loading / Error boundary**
11. **Tooltip primitive** (for dense UIs)
12. **Avatar stack / presence indicator** (task assignment)
13. **Confirmation dialog** (deletes, important actions)
14. **Date utilities + Due date component** (relative time + calendar picker)
15. **Progress bar / KPI widget** (analytics)
16. **Column header with filters and counts**
17. **Search input with debounced query**
18. **Keyboard shortcuts manager** (for power users)
19. **Accessibility helpers (aria helpers, skip links)**
20. **Storage adapter interface** (LocalStorage/IndexedDB/remote)

Each of those is a tiny library you can drop in other projects.

---

# 4 — Granular component & file structure (atomic level)

This is *the* file-tree I’d implement. Be obsessive about single responsibility.

```
src/
  app/
    store.js
    rootReducer.js
  features/
    tasks/
      types.ts
      tasksSlice.ts         # RTK slice (entities, thunks)
      tasksSelectors.ts
      tasksAPI.ts           # storageAdapter wrapper
      hooks/
        useTasks.ts
      components/
        TaskCard/
          TaskCard.tsx
          TaskCard.module.css
        TaskModal/
          TaskModal.tsx
          TaskModalHeader.tsx
          CommentList.tsx
        TaskForm/
          TaskForm.tsx
    board/
      BoardPage.tsx
      Board.tsx
      Column.tsx
      ColumnHeader.tsx
      QuickAddInput.tsx
      dnd/
        dndContext.ts
        dndHandlers.ts      # maps events to actions
    filters/
      filtersSlice.ts
      FiltersPanel.tsx
      SearchInput.tsx
    ui/
      uiSlice.ts            # modals, toasts, undo buffer, loading states
      ToastContainer.tsx
      Modal.tsx
      Overlay.tsx
    theme/
      themeSlice.ts
      ThemeToggle.tsx
  components/
    ui/                    # primitives
      Button.tsx
      Input.tsx
      Select.tsx
      Avatar.tsx
      Badge.tsx
      Tooltip.tsx
      Icon.tsx
  services/
    storage/
      storageAdapter.ts     # abstract interface
      localStorage.ts       # implementation
      remoteApi.ts          # placeholder for future
    analytics/
      analyticsCollector.ts
  hooks/
    useDebounce.ts
    useLocalStorageSync.ts
    useKeyShortcuts.ts
  utils/
    date.ts
    uid.ts
    constants.ts
  pages/
    BoardPage.tsx
    TaskPage.tsx
    AnalyticsPage.tsx
  styles/
    variables.css
    global.css
  index.tsx
```

Notes:

* Use TypeScript if you want recruiter + long-term benefits. If not, strongly type key modules.
* Put tests next to modules: `__tests__` or `*.spec.tsx`.

---

# 5 — RTK slice shapes & reducers (atomic actions)

Example responsibilities and actions (pseudo):

**tasksSlice**

* State: `{ entities, ids, lastUpdated, hydrated }`
* Actions:

  * `addTask(payload)`
  * `updateTask({id, changes})`
  * `deleteTask(id)`
  * `restoreTask(task)`  // undo
  * `moveTask({id, fromColumn, toColumn, toIndex})`
  * `reorderTasks({columnId, orderedIds})`
* Thunks:

  * `hydrateTasks()` // load from storageAdapter
  * `persistTasks()` // called via middleware/debounce

**uiSlice**

* Actions:

  * `showToast({type, message, action})`
  * `openModal({type, payload})`
  * `closeModal()`
  * `pushUndo({type, payload})`
  * `popUndo()`

**filtersSlice**

* Actions:

  * `setSearch(query)`
  * `setPriorityFilter([...])`
  * `setStatusFilter([...])`
  * `setSort(type)`

Selectors = your secret sauce: `selectVisibleTasks(state) => apply filters, search, sort, memoized`.

---

# 6 — Acceptance criteria / how to mark a feature COMPLETE

No fuzzy business — each feature must have tests + docs.

Example: *Quick-Add per column* complete when:

* [ ] Quick-add input shown in each column on desktop + mobile
* [ ] Hitting Enter adds task with minimal fields (title, createdAt) and keeps focus for next add
* [ ] Task count updates immediately
* [ ] DnD still consistent after addition
* [ ] Unit test covers reducer add and action
* [ ] E2E test simulates adding and dragging the new task
* [ ] Demo GIF recorded showing add + drag

Use similar checklist for every MVP item.

---

# 7 — Recruiter-admired parts (what to highlight)

Build these and scream them on your README/demo:

* **RTK createEntityAdapter** usage for normalized state
* **Feature-based architecture** (clear folder boundaries)
* **Storage adapter** showing “future-ready” design
* **Accessible DnD** (keyboard support)
* **Selector composition + memoization** for performance
* **Automated tests** (reducers + selector + e2e)
* **CI pipeline** with lint/test/build/deploy
* **Polished README + GIF demo + live link**
* **TypeScript + strict types** (if used)
* **Decoupled UI primitives** that can be reused across projects

Recruiters like seeing tradeoffs documented: show why you used local-first, the adapter pattern, why RTK, reasons for DnD lib choices.

---

# 8 — Non-functional features (must-have in modern frontends)

* **Type safety** (TypeScript or extremely strict prop types)
* **Testing** (unit, integration, E2E)
* **Accessibility** (a11y)
* **Performance** (memoization, virtualization)
* **Dev DX** (hot reload, linting, pretty formatting)
* **Security basics** (escape HTML, sanitize inputs in comments)
* **Observability** (error logging)
* **CI/CD** (automated deploy)

These are baseline expectations now — no recruiter grace for lacking them.

---

# 9 — 20 Atomic tasks you can pick right now (granular work items)

Pick any, complete in 1–4 hours (estimated), mark done with tests.

1. Create `Task` Type definition and test it.
2. Implement `tasksSlice` add/update/delete with unit tests.
3. Implement `storageAdapter.localStorage.getAll()` and `saveAll()` with throttling.
4. Hydrate store on app init using `hydrateTasks()` thunk.
5. Build `TaskCard` UI with title, priority badge, truncated description.
6. Build `QuickAddInput` component and wire to `addTask`.
7. Add `react-dnd` / `@dnd-kit` scaffolding and map DnD events to `moveTask` action.
8. Implement `ColumnHeader` with live count selector.
9. Create `TaskModal` component and route `/task/:id` deep link.
10. Implement inline edit and autosave on blur.
11. Implement `filtersSlice` and search input with debounced selector.
12. Implement `uiSlice` and `ToastContainer`, show toast on delete with undo action.
13. Add overdue detection util and show overdue badge.
14. Implement `themeSlice` and `ThemeToggle`, persist preference.
15. Add `createSelector` pipeline: `selectVisibleTasks` (status → priority → search → sort).
16. Add unit tests for `tasksSelectors` (edge cases, filter combos).
17. Add keyboard navigation between cards (arrow keys) and accessible focus states.
18. Add a small Analytics widget (tasks completed %, overdue count).
19. Add E2E test: create task → drag to In Progress → mark done.
20. Deploy to Vercel and add demo GIF to README.

---

# 10 — Roadmap & milestone plan (practical order)

Follow this order; ticks are for you to mark.

**M1 (Backbone):**

* [ ] Task type + tasksSlice + storage adapter
* [ ] Hydrate + persist

**M2 (Board UX):**

* [ ] Board + Column + TaskCard + QuickAdd
* [ ] DnD basic move (between columns)

**M3 (Task detail):**

* [ ] TaskModal + inline edit + deep link

**M4 (Utility):**

* [ ] Filters/selectors + sort
* [ ] Undo & toasts

**M5 (Polish):**

* [ ] Theme + responsive + accessibility
* [ ] Analytics widget + progress bar

**M6 (Quality/Ship):**

* [ ] Tests (unit + e2e)
* [ ] CI and deploy
* [ ] README with GIF + portfolio description

---

# 11 — Tools, libs, and why

* **React** — obvious
* **Redux Toolkit** — predictable state, devtools, createEntityAdapter
* **TypeScript** — reduce bugs, impress recruiters
* **@dnd-kit** — flexible DnD with accessible support
* **React Router v6** — routing + modal routes
* **Jest + React Testing Library** — unit + integration
* **Playwright/Cypress** — e2e
* **Vercel** — fast deploy + preview
* **Sentry** (optional) — error reporting

---

# 12 — What to show on your README / Portfolio (short list)

* Live demo link (Vercel).
* 30s GIF: add task → drag → open modal → edit → undo.
* Architecture diagram (text + small mermaid if you like)
* Tech choices + tradeoffs.
* Bullet list: “what I learned” or “hard problems solved” (selectors, undo buffer, storage adapter, accessibility).

---

# Final note — no sugar: make it hard

Don’t take easy shortcuts if your goal is to be interview-ready. Implement normalized state, memoized selectors, tests, and accessibility. That’s where most candidates cut corners. Do those well and you’ll blow past typical portfolio projects.

If you want, I’ll:

* generate full `tasksSlice.ts` + `storageAdapter` code (TypeScript)
* produce `selectVisibleTasks` selector implementation
* scaffold `Board` + `Column` + `TaskCard` components with prop types and tests

Pick one and I’ll dump the code. You know what to do.
