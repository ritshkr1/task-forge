import React, { useState } from "react";

function SectionHeader({ title, actions }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 12
    }}>
      <h1 style={{ fontSize: 20, margin: 0 }}>{title}</h1>
      <div style={{ display: "flex", gap: 8 }}>{actions}</div>
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      border: "1px solid var(--color-border)",
      borderRadius: 12,
      background: "var(--color-surface)",
      color: "var(--color-text)",
      padding: 12,
      ...style
    }}>
      {children}
    </div>
  );
}

function PlaceholderBadge({ text, color = "#ef4444" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 9999,
      background: color,
      color: "#fff",
      fontSize: 12
    }}>{text}</span>
  );
}

function Dashboard() {
  const [view, setView] = useState('table');

  function onClickChangeView(nextView){
    setView(nextView);
  }
  return (
    <div className="Dashboard grid-gap-16">
      <SectionHeader
        title="Dashboard"
        actions={(
          <>
            <button style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}>🔍</button>
          </>
        )}
      />

      {/* Views Switcher - UI only */}
      {<Card>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className={`btn-chip ${view === 'table'  ? "btn-chip--active" : ""}`} onClick={() => onClickChangeView('table')}>Table</button>
          <button className={`btn-chip ${view === 'kanban' ? "btn-chip--active" : ""}`} onClick={() => onClickChangeView('kanban')}>Kanban</button>
          <button className={`btn-chip ${view === 'list' ? "btn-chip--active" : ""}`} onClick={() => onClickChangeView('list')}>List</button>
        </div>
      </Card>}

      {/* Table View - UI skeleton */}
      {view === 'table' &&<Card>
        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Due</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td>Sample task {idx + 1}</td>
                  <td><PlaceholderBadge text="Todo" color="#6b7280" /></td>
                  <td><PlaceholderBadge text="Medium" color="var(--color-accent)" /></td>
                  <td>2025-10-31</td>
                  <td>Alex</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>}

      {/* Kanban View - UI skeleton */}
      {view === 'kanban' &&<div className="kanban">
        <Card className="kanban__lane">
          <h3 style={{ marginTop: 0 }}>Todo</h3>
          <div style={{ display: "grid", gap: 8 }}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} style={{ border: "1px solid var(--color-border)", borderRadius: 8, padding: 8, background: "var(--color-bg)" }}>
                <div style={{ fontWeight: 600 }}>Sample card {idx + 1}</div>
                <div style={{ color: "#EEEEEE", opacity: 0.8, fontSize: 12 }}>Short description goes here</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="kanban__lane">
          <h3 style={{ marginTop: 0 }}>In Progress</h3>
          <div style={{ display: "grid", gap: 8 }}>
            {Array.from({ length: 1 }).map((_, idx) => (
              <div key={idx} style={{ border: "1px solid var(--color-border)", borderRadius: 8, padding: 8, background: "var(--color-bg)" }}>
                <div style={{ fontWeight: 600 }}>Sample card</div>
                <div style={{ color: "#EEEEEE", opacity: 0.8, fontSize: 12 }}>Short description goes here</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="kanban__lane">
          <h3 style={{ marginTop: 0 }}>Done</h3>
          <div style={{ display: "grid", gap: 8 }}>
            {Array.from({ length: 1 }).map((_, idx) => (
              <div key={idx} style={{ border: "1px solid var(--color-border)", borderRadius: 8, padding: 8, background: "var(--color-bg)" }}>
                <div style={{ fontWeight: 600 }}>Completed sample</div>
                <div style={{ color: "#EEEEEE", opacity: 0.8, fontSize: 12 }}>Short description goes here</div>
              </div>
            ))}
          </div>
        </Card>
      </div>}

      {/* List View - UI skeleton */}
      {view === 'list' && <Card>
        <div style={{ display: "grid", gap: 8 }}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="list-item">
              <div>
                <div style={{ fontWeight: 600 }}>Sample task {idx + 1}</div>
                <div className="muted" style={{ fontSize: 12 }}>Small description</div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <PlaceholderBadge text="Low" color="var(--color-accent)" />
                <span className="muted" style={{ fontSize: 12 }}>Due: 2025-10-31</span>
              </div>
            </div>
          ))}
        </div>
      </Card>}
    </div>
  );
}

export default Dashboard;
