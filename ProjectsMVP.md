Task Forge = mini-Jira, built right: feature-based React app, Redux Toolkit (RTK) for state, React Router, DnD engine, clear storage adapter (local first, backend-friendly), full accessibility, testing, CI/CD, deployable to Vercel. Build _reusable primitives_ and you’ll reuse them forever.

---

# **THE CHECKLIST LIST (from zero to portfolio-ready)**

## **PHASE 1 — Project Spine (foundation)**

You cannot skip these unless you enjoy chaos.

### **1. Project Setup**

- [*] Create Angular project
- [*] Add global CSS variables and theme tokens

### **2. Task Data Foundations**

- [*] Define `Task` model (id, title, description, status, priority, dates)

### **3. Storage Layer (local-first)**

- [*] Implement LocalStorage version
- [NOT] Persist tasks with debounce
- [ ] Add fallback empty state UI

---

## **PHASE 2 — Core App Experience**

This is where Task Forge becomes functional.

### **4. Kanban Board**

- [ ] Build board layout (3 columns)
- [ ] Create `Column` component
- [ ] Create `TaskCard` component
- [ ] Show tasks by column
- [ ] Add Quick Add input in each column
- [ ] Add basic styling + counts

### **5. Drag & Drop**

- [ ] Add draggable task cards
- [ ] Add droppable columns
- [ ] Support reorder within the same column
- [ ] Smooth animation + placeholder ghost

---

## **PHASE 3 — Task Details (User Feels It's Real)**

This is when your app stops looking like "student work".

### **6. Task Modal**

- [ ] Build modal primitive (focus trap, ESC close)
- [ ] Show modal on card click
- [ ] Add form: title, description, priority, due date
- [ ] Add autosave on field blur
- [ ] Edit in full modal view
- [ ] Add delete with confirmation

### **7. Inline Edit**

- [ ] Double-click title on card
- [ ] Convert to input
- [ ] Autosave
- [ ] Blur to exit
- [ ] Escape to cancel

---

## **PHASE 4 — Filters, Sorting & Power Tools**

Recruiters LOVE this part because it's rare in student projects.

### **8. Filters Panel**

- [ ] Search by text
- [ ] Filter by status
- [ ] Filter by priority
- [ ] Add sort: date, priority
- [ ] Badge indicators for active filters
- [ ] Memoized selector for visible tasks

### **9. Undo System**

- [ ] Undo buffer in UI slice
- [ ] Delete task triggers toast
- [ ] Click restore returns the task
- [ ] Auto-expire undo after 6s

### **10. Toast System**

- [ ] Toast container
- [ ] Success/Warning/Error styles
- [ ] Programmatic API (`showToast()`)
- [ ] Animations

---

## **PHASE 5 — UX Polish (this makes it portfolio-ready)**

### **11. Theme System**

- [ ] Theme slice (light/dark)
- [ ] Persist in storage
- [ ] Add toggle button
- [ ] System preference detection

### **12. Accessibility**

- [ ] ARIA roles for list and cards
- [ ] Keyboard shortcuts (open modal, add task)
- [ ] Focus rings for everything
- [ ] Keyboard drag & drop fallback

### **13. Responsive Layout**

- [ ] Mobile stacked view
- [ ] Tablet two-column view
- [ ] Desktop three-column fixed layout

### **14. Animations**

- [ ] Card hover
- [ ] Modal open/close
- [ ] Column highlight on drag-over
- [ ] Toast slide-in

---

## **PHASE 6 — Analytics & Extras**

This is where you flex.

### **15. Analytics Widget**

- [ ] Count tasks completed this week
- [ ] Show overdue tasks
- [ ] Progress bar % done
- [ ] Trend line or sparkline

### **16. Bulk Actions**

- [ ] Multi-select tasks
- [ ] Batch delete
- [ ] Batch change priority/status

---

## **PHASE 7 — Infrastructure (the parts devs forget)**

### **17. Unit Tests**

- [ ] Tasks slice
- [ ] Filters selectors
- [ ] Undo logic

### **18. Integration Tests**

- [ ] Add task
- [ ] Edit task
- [ ] Drag task
- [ ] Delete + undo

### **19. E2E Test**

- [ ] Full flow: create → drag → edit → filter → delete → undo

### **20. CI/CD**

- [ ] Setup GitHub Actions
- [ ] Lint on PR
- [ ] Run tests
- [ ] Auto deploy to Vercel on merge

---

## **PHASE 8 — Portfolio Polish (the final wrap)**

### **21. README**

- [ ] Clear architecture diagram
- [ ] Tech decisions
- [ ] “Hard problems solved”
- [ ] Screenshots + GIFs
- [ ] Live demo link

### **22. Performance**

- [ ] Virtualize task lists
- [ ] Memoize heavy components
- [ ] useCallback + useMemo everywhere needed
- [ ] Lazy load modal route

### **23. Error Handling**

- [ ] Fallback UI
- [ ] Try/catch around persistence
- [ ] Graceful offline handling

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
