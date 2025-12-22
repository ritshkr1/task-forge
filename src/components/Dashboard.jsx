import React from 'react';
import { 
  CheckCircle2, FileEdit, PlusSquare, Calendar, 
  CheckSquare, Zap, Bookmark, Layers, User, MoreHorizontal
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// --- MOCK DATA ---
const statusData = [
  { name: 'In Progress', value: 6, color: '#A855F7' }, // Purple
  { name: 'In Review', value: 1, color: '#3B82F6' },   // Blue
  { name: 'To Do', value: 1, color: '#84CC16' },       // Green (matching screenshot 1)
];

const priorityData = [
  { name: 'Highest', value: 1 },
  { name: 'High', value: 0 },
  { name: 'Medium', value: 1 },
  { name: 'Low', value: 0 },
  { name: 'Lowest', value: 0 },
  { name: 'None', value: 6 },
];

const typesData = [
  { label: 'Task', icon: CheckSquare, color: '#3B82F6', value: 50 },
  { label: 'Epic', icon: Zap, color: '#A855F7', value: 25 },
  { label: 'Story', icon: Bookmark, color: '#22C55E', value: 25 },
  { label: 'Subtask', icon: Layers, color: '#94A3B8', value: 0 },
];

const workloadData = [
  { assignee: 'Unassigned', value: 100, count: 8, total: 8 }
];

const epicProgressData = [
  { 
    id: 'CCS-2', 
    name: '(Sample) Chatbot Development', 
    done: 0, 
    inProgress: 50, 
    todo: 50 
  },
  { 
    id: 'CCS-1', 
    name: '(Sample) User Interaction Design', 
    done: 0, 
    inProgress: 100, 
    todo: 0 
  }
];

// --- SUB-COMPONENTS ---

// 1. Metric Card (Top Row)
const MetricCard = ({ label, value, icon: Icon, subtext }) => (
  <div className="bg-bg-tertiary border border-border-main rounded-[3px] p-4 flex flex-col justify-between h-32 hover:bg-card-bg-hover transition-colors">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-[3px] bg-neutral-100 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-text-secondary" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-text-primary leading-none mb-1">{value}</h3>
        <span className="text-sm font-bold text-text-primary">{label}</span>
      </div>
    </div>
    <div className="mt-auto">
      <p className="text-xs text-text-secondary">{subtext}</p>
    </div>
  </div>
);

// 2. Generic Dashboard Card Container
const DashboardCard = ({ title, subtitle, linkText, children, className = "" }) => (
  <div className={`bg-bg-tertiary border border-border-main rounded-[3px] p-5 flex flex-col ${className}`}>
    <div className="mb-4">
      <h3 className="font-bold text-text-primary text-sm mb-1">{title}</h3>
      <p className="text-xs text-text-secondary">
        {subtitle} {linkText && <span className="text-accent cursor-pointer hover:underline">{linkText}</span>}
      </p>
    </div>
    <div className="flex-1 min-h-0">
      {children}
    </div>
  </div>
);

// 3. Progress Bar Row (For Types & Workload)
const ProgressBarRow = ({ label, icon: Icon, percentage, color = "bg-neutral-300", subLabel }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between items-center mb-1 text-xs">
      <div className="flex items-center gap-2 text-text-secondary font-medium">
        {Icon && <Icon size={14} className={color.replace('bg-', 'text-')} />} 
        {/* Simple logic to swap bg- to text- for icon, or passed explicit color hex */}
        <span className="text-text-primary">{label}</span>
      </div>
      <span className="text-text-secondary">{subLabel}</span>
    </div>
    <div className="flex items-center gap-3">
        <div className="flex-1 h-6 bg-neutral-100 rounded-[3px] overflow-hidden relative">
            <div 
                className="h-full transition-all duration-500"
                style={{ width: `${percentage}%`, backgroundColor: color.startsWith('#') ? color : undefined }}
            >
             {!color.startsWith('#') && <div className={`h-full w-full ${color}`}></div>}
            </div>
        </div>
        <span className="text-xs text-text-secondary w-8 text-right">{percentage > 0 ? `${percentage}%` : ''}</span>
    </div>
  </div>
);

// --- MAIN DASHBOARD VIEW ---
const SummaryDashboard = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
      
      {/* 1. FILTER HEADER */}
      <div className="flex items-center gap-2 mb-4">
         <button className="flex items-center gap-2 px-3 py-1.5 bg-bg-tertiary border border-border-main rounded-[3px] text-sm font-medium text-text-primary hover:bg-neutral-100 transition-colors">
            <MoreHorizontal size={14} /> Filter
         </button>
      </div>

      {/* 2. METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="completed" value="0" icon={CheckCircle2} subtext="in the last 7 days" />
        <MetricCard label="updated" value="0" icon={FileEdit} subtext="in the last 7 days" />
        <MetricCard label="created" value="0" icon={PlusSquare} subtext="in the last 7 days" />
        <MetricCard label="due soon" value="0" icon={Calendar} subtext="in the next 7 days" />
      </div>

      {/* 3. ROW 1: STATUS & ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* STATUS OVERVIEW */}
        <DashboardCard 
          title="Status overview" 
          subtitle="Get a snapshot of the status of your work items." 
          linkText="View all work items"
          className="min-h-[300px]"
        >
          <div className="flex items-center h-full">
            {/* Donut Chart */}
            <div className="relative w-40 h-40 shrink-0 mx-auto lg:mx-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={75}
                      dataKey="value"
                      stroke="var(--bg-tertiary)"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-bold text-text-primary">8</span>
                  <span className="text-[10px] text-text-secondary uppercase">Total work items</span>
                </div>
            </div>
            
            {/* Custom Legend */}
            <div className="ml-8 flex-1 space-y-3">
               {statusData.map((item) => (
                   <div key={item.name} className="flex items-center justify-between text-sm">
                       <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: item.color }}></div>
                           <span className="text-text-secondary">{item.name}</span>
                       </div>
                       <span className="text-text-primary font-medium">{item.value}</span>
                   </div>
               ))}
            </div>
          </div>
        </DashboardCard>

        {/* ACTIVITY (Empty State) */}
        <DashboardCard title="" subtitle="" className="min-h-[300px] flex items-center justify-center text-center">
             <div className="flex flex-col items-center max-w-xs">
                 <div className="w-24 h-24 mb-4 relative">
                     {/* Abstract Icon CSS Shapes */}
                     <div className="absolute top-0 right-0 w-16 h-12 bg-neutral-200 rounded-[2px] opacity-20"></div>
                     <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent opacity-90 rounded-[3px] flex items-center justify-center z-10 shadow-lg">
                         <div className="text-white text-xl font-bold">✓</div>
                     </div>
                     <div className="absolute bottom-8 right-8 w-14 h-10 bg-neutral-300 rounded-[2px] opacity-40"></div>
                 </div>
                 <h3 className="text-lg font-semibold text-text-primary mb-2">No activity yet</h3>
                 <p className="text-sm text-text-secondary">
                    Create a few work items and invite some teammates to your space to see your space activity.
                 </p>
             </div>
        </DashboardCard>
      </div>

      {/* 4. ROW 2: PRIORITY & TYPES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* PRIORITY BREAKDOWN */}
          <DashboardCard 
            title="Priority breakdown" 
            subtitle="Get a holistic view of how work is being prioritized." 
            linkText="How to manage priorities"
          >
             <div className="h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={priorityData} barSize={40}>
                      <CartesianGrid strokeDasharray="0" vertical={false} stroke="var(--border-light)" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} 
                        dy={10}
                      />
                      <YAxis 
                        hide={false}
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} 
                      />
                      <Bar 
                        dataKey="value" 
                        fill="var(--text-secondary)" 
                        opacity={0.6}
                      />
                   </BarChart>
                </ResponsiveContainer>
             </div>
          </DashboardCard>

          {/* TYPES OF WORK */}
          <DashboardCard 
             title="Types of work" 
             subtitle="Get a breakdown of work items by their types." 
             linkText="View all items"
          >
              <div className="mt-4 space-y-6">
                 {typesData.map((type, idx) => (
                     <div key={idx} className="grid grid-cols-[100px_1fr] gap-4 items-center">
                         <div className="flex items-center gap-2 text-text-primary text-sm font-medium">
                            {/* Checkbox Icon for Task, Bolt for Epic, etc. */}
                            <type.icon size={16} color={type.color} className="shrink-0" />
                            {type.label}
                         </div>
                         <div className="w-full bg-neutral-100 h-8 rounded-[3px] overflow-hidden relative">
                             {type.value > 0 && (
                                 <div 
                                    className="h-full flex items-center px-2 text-xs font-medium text-text-primary/80"
                                    style={{ width: `${type.value}%`, backgroundColor: 'var(--text-secondary)', opacity: 0.3 }}
                                 >
                                    {/* Usually text goes here, just simplified visuals for now */}
                                 </div>
                             )}
                             <span className="absolute inset-y-0 left-2 flex items-center text-xs font-semibold text-text-primary z-10">
                                {type.value > 0 ? `${type.value}%` : ''}
                             </span>
                         </div>
                     </div>
                 ))}
              </div>
          </DashboardCard>
      </div>

      {/* 5. ROW 3: WORKLOAD & EPIC PROGRESS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* TEAM WORKLOAD */}
          <DashboardCard 
             title="Team workload" 
             subtitle="Monitor the capacity of your team." 
             linkText="Reassign work items"
          >
             <div className="mt-4">
                <div className="flex justify-between text-xs font-bold text-text-secondary mb-2 uppercase tracking-wide">
                    <span>Assignee</span>
                    <span>Work distribution</span>
                </div>
                {workloadData.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="flex items-center justify-between py-2">
                             <div className="flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs">
                                     <User size={14} className="text-text-secondary" />
                                 </div>
                                 <span className="text-sm text-text-primary underline decoration-dotted">{item.assignee}</span>
                             </div>
                             <div className="w-3/5 relative group">
                                 <div className="bg-neutral-100 h-6 rounded-[3px] overflow-hidden">
                                     <div className="bg-text-secondary h-full opacity-50" style={{ width: `${item.value}%` }}></div>
                                 </div>
                                 <div className="absolute inset-0 flex items-center pl-2 text-xs font-medium text-text-primary">
                                     {item.value}%
                                 </div>
                                 {/* Tooltip on Hover */}
                                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg-tertiary border border-border-main shadow-lg px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                     {item.value}% ({item.count}/{item.total} work items)
                                 </div>
                             </div>
                        </div>
                    </div>
                ))}
             </div>
          </DashboardCard>

          {/* EPIC PROGRESS */}
          <DashboardCard 
             title="Epic progress" 
             subtitle="See how your epics are progressing at a glance." 
             linkText="View all epics"
          >
             {/* Simple Legend */}
             <div className="flex gap-4 mt-2 mb-4">
                {[{l: 'Done', c: 'bg-success-500'}, {l: 'In progress', c: 'bg-brand'}, {l: 'To do', c: 'bg-text-secondary'}].map(item => (
                    <div key={item.l} className="flex items-center gap-1.5">
                        <div className={`w-3 h-3 rounded-[2px] ${item.c}`}></div>
                        <span className="text-xs text-text-secondary">{item.l}</span>
                    </div>
                ))}
             </div>

             <div className="space-y-5">
                {epicProgressData.map((epic) => (
                    <div key={epic.id}>
                        <div className="flex items-center gap-2 mb-1.5">
                             <Zap size={14} className="text-purple-500 fill-current" />
                             <span className="text-sm font-medium text-text-primary">
                                 <span className="text-text-secondary mr-1">{epic.id}</span>
                                 {epic.name}
                             </span>
                        </div>
                        {/* Stacked Bar */}
                        <div className="w-full h-5 flex rounded-[3px] overflow-hidden">
                            {epic.done > 0 && (
                                <div className="bg-success-500 h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: `${epic.done}%` }}>
                                    {epic.done > 15 && `${epic.done}%`}
                                </div>
                            )}
                            {epic.inProgress > 0 && (
                                <div className="bg-brand h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: `${epic.inProgress}%` }}>
                                    {epic.inProgress > 15 && `${epic.inProgress}%`}
                                </div>
                            )}
                            {epic.todo > 0 && (
                                <div className="bg-text-secondary opacity-60 h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: `${epic.todo}%` }}>
                                    {epic.todo > 15 && `${epic.todo}%`}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
             </div>
          </DashboardCard>
      </div>

    </div>
  );
};

export default SummaryDashboard;