import AweFontIcons from "./common/IconComponent"
export default function Dashboard() {
    return <div className="dashboard-container">
        <section className="dashboard-metrics-bar">
            <div className="metrics-container">
                <div className="metric-box">

                    <i className="metric-icon completed-icon">
                        <AweFontIcons iconName={'square-check'} />
                    </i>
                    <div className="metric-details">
                        <span className="metric-value">0</span>
                        <span className="metric-label">completed in the last 7 days</span>
                    </div>
                </div>
                <div className="metric-box">
                    <i className="metric-icon updated-icon">
                        <AweFontIcons iconName={'wrench'} />
                    </i>
                    <div className="metric-details">
                        <span className="metric-value">6</span>
                        <span className="metric-label">updated in the last 7 days</span>
                    </div>
                </div>
                <div className="metric-box">
                    <i className="fas fa-plus-square metric-icon created-icon">
                        <AweFontIcons iconName={'square-plus'} />
                    </i>
                    <div className="metric-details">
                        <span className="metric-value">6</span>
                        <span className="metric-label">created in the last 7 days</span>
                    </div>
                </div>
                <div className="metric-box">
                    <i className="fas fa-calendar-alt metric-icon duesoon-icon">
                        <AweFontIcons iconName={'calendar-alt'} />
                    </i>
                    <div className="metric-details">
                        <span className="metric-value">0</span>
                        <span className="metric-label">due soon in the next 7 days</span>
                    </div>
                </div>
            </div>
        </section>
        <main className="dashboard-grid">
            <section className="card status-overview">
                <h2>Status overview</h2>
                <p>Get a snapshot of the status of your work items. <a href="#">View all work items</a></p>
                <div className="status-content">
                    <div className="donut-chart-container">
                        <div className="donut-chart">
                            <span className="total-count">6</span>
                            <span className="chart-label">Total work item...</span>
                        </div>
                    </div>
                    <div className="status-legend">
                        <ul>
                            <li><span className="color-box in-progress"></span> In Progress: 4</li>
                            <li><span className="color-box to-do"></span> To Do: 1</li>
                            <li><span className="color-box done"></span> Done: 1</li>
                        </ul>
                    </div>
                </div>
                <div className="status-summary-boxes">
                    <div className="summary-box">
                        <strong>0</strong>
                        <span>completed in the last 7 days</span>
                    </div>
                    <div className="summary-box">
                        <strong>6</strong>
                        <span>updated in the last 7 days</span>
                    </div>
                    <div className="summary-box">
                        <strong>6</strong>
                        <span>created in the last 7 days</span>
                    </div>
                    <div className="summary-box">
                        <strong>0</strong>
                        <span>due soon in the next 7 days</span>
                    </div>
                </div>
            </section>

            <section className="card recent-activity">
                <h2>Recent activity</h2>
                <p>Stay up to date with what's happening across the space.</p>
                <div className="activity-list">
                    <div className="activity-item">
                        <span className="date">Today</span>
                    </div>
                    <div className="activity-item">
                        <span className="user-icon">R</span>
                        <p>Ritesh Kumar updated field "status" on <a href="#">CCS-6: (Sample) Develop Frontend Interface</a> <span className="tag to-do-tag">TO DO</span></p>
                        <span className="time">5 minutes ago</span>
                    </div>
                    <div className="activity-item">
                        <span className="user-icon">R</span>
                        <p>Ritesh Kumar updated field "status" on <a href="#">CCS-5: (Sample) Implement NLP Engine</a> <span className="tag in-progress-tag">IN PROGRESS</span></p>
                        <span className="time">5 minutes ago</span>
                    </div>
                    <div className="activity-item">
                        <span className="user-icon">R</span>
                        <p>Ritesh Kumar updated field "status" on <a href="#">CCS-4: (Sample) Design Chatbot Personality</a> <span className="tag in-progress-tag">IN PROGRESS</span></p>
                        <span className="time">5 minutes ago</span>
                    </div>
                </div>
            </section>

            <section className="card priority-breakdown">
                <h2>Priority breakdown</h2>
                <p>Get a holistic view of how work is being prioritized. <a href="#">How to manage priorities for spaces</a></p>
                <div className="chart-placeholder">
                    <div className="y-axis">
                        <span>6</span>
                        <span>4</span>
                        <span>2</span>
                        <span>0</span>
                    </div>
                    <div className="bars">
                        <div className="bar highest" style={{ height: '0%' }}></div>
                        <div className="bar high" style={{ height: '0%' }}></div>
                        <div className="bar medium" style={{ height: '0%' }}></div>
                        <div className="bar low" style={{ height: '0%' }}></div>
                        <div className="bar lowest" style={{ height: '0%' }}></div>
                        <div className="bar none" style={{ height: '80%' }}></div>
                    </div>
                    <div className="x-axis">
                        <span>Highest</span>
                        <span>High</span>
                        <span>Medium</span>
                        <span>Low</span>
                        <span>Lowest</span>
                        <span>None</span>
                    </div>
                </div>
            </section>

            <section className="card types-of-work">
                <h2>Types of work</h2>
                <p>Get a breakdown of work items by their types. <a href="#">View all items</a></p>
                <div className="work-type-list">
                    <div className="work-type-item">
                        <span className="type">Epic</span>
                        <span className="distribution">33%</span>
                        <div className="progress-bar-container"><div className="progress-bar" style={{ width: "33%" }}></div></div>
                    </div>
                    <div className="work-type-item">
                        <span className="type"><i className="fas fa-check-square"></i> Task</span>
                        <span className="distribution">33%</span>
                        <div className="progress-bar-container"><div className="progress-bar" style={{ width: "33%" }}></div></div>
                    </div>
                    <div className="work-type-item">
                        <span className="type">Story</span>
                        <span className="distribution">33%</span>
                        <div className="progress-bar-container"><div className="progress-bar" style={{ width: "33%" }}></div></div>
                    </div>
                    <div className="work-type-item">
                        <span className="type">Subtask</span>
                        <span className="distribution">0%</span>
                        <div className="progress-bar-container"><div className="progress-bar" style={{ width: "0%" }}></div></div>
                    </div>
                </div>
            </section>

            <section className="card team-workload">
                <h2>Team workload</h2>
                <p>Monitor the capacity of your team. <a href="#">Reassign work items to get the right balance</a></p>
                <table>
                    <thead>
                        <tr>
                            <th>Assignee</th>
                            <th>Work distribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className="user-icon unassigned-icon">?</span>
                                Unassigned
                            </td>
                            <td>
                                100%
                                <div className="progress-bar-container thin-bar"><div className="progress-bar" style={{ width: "100%" }}></div></div>
                                <span className="work-item-count">100% (6/6 work items)</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="card epic-progress">
                <h2>Epic progress</h2>
                <p>See how your epics are progressing at a glance. <a href="#">View all epics</a></p>
                <div className="epic-item">
                    <span className="epic-title">CCS-2 (Sample) Chatbot Development</span>
                    <div className="progress-legend">
                        <span className="done">Done</span>
                        <span className="in-progress">In progress</span>
                        <span className="to-do">To do</span>
                    </div>
                    <div className="multi-progress-bar">
                        <div className="segment in-progress-segment" style={{ width: "50%" }}>50%</div>
                        <div className="segment to-do-segment" style={{ width: "50%" }}>50%</div>
                    </div>
                </div>
                <div className="epic-item">
                    <span className="epic-title">CCS-1 (Sample) User Interaction Design</span>
                    <div className="progress-legend">
                        <span className="done">Done</span>
                    </div>
                    <div className="multi-progress-bar">
                        <div className="segment done-segment" style={{ width: "100%" }}>100%</div>
                    </div>
                </div>
            </section>
        </main>
    </div>
}