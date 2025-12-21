import React from 'react';
import { 
  Search, SlidersHorizontal, ChevronDown, BarChart2, List, 
  MoreHorizontal, Plus, Zap, CheckSquare, MessageSquare, 
  AlertTriangle, Calendar, User, GripVertical, ChevronRight,
  AlignJustify, ChevronsUp
} from 'lucide-react';

// --- MOCK DATA (Combining image_4.png & image_5.png) ---
const listData = [
  {
    id: '1',
    type: 'epic',
    key: 'CCS-1',
    summary: '(Sample) User Interaction Design',
    status: 'IN PROGRESS',
    comments: 0,
    assignee: null,
    dueDate: 'Dec 8, 2025',
    dueDateWarning: true,
    priority: null,
    labels: [],
    created: 'Dec 1, 2025',
    updated: 'Dec 1, 2025',
    reporter: { name: 'Ritesh Kumar', avatar: 'RK' },
    hasChildren: true, // To show the expand arrow
  },
  {
    id: '2',
    type: 'epic',
    key: 'CCS-2',
    summary: '(Sample) Chatbot Development',
    status: 'IN PROGRESS',
    comments: 0,
    assignee: null,
    dueDate: 'Dec 15, 2025',
    dueDateWarning: true,
    priority: null,
    labels: [],
    created: 'Dec 1, 2025',
    updated: 'Dec 1, 2025',
    reporter: { name: 'Ritesh Kumar', avatar: 'RK' },
    hasChildren: true,
  },
  {
    id: '3',
    type: 'task',
    key: 'CCS-7',
    summary: 'test',
    status: 'IN PROGRESS',
    comments: 0,
    assignee: null,
    dueDate: null,
    dueDateWarning: false,
    priority: 'medium',
    labels: [],
    created: 'Dec 1, 2025',
    updated: 'Dec 1, 2025',
    reporter: { name: 'Ritesh Kumar', avatar: 'RK' },
    hasChildren: false,
  },
  {
    id: '4',
    type: 'task',
    key: 'CCS-8',
    summary: 'New Project to begins',
    status: 'IN PROGRESS',
    comments: 0,
    assignee: null,
    dueDate: null,
    dueDateWarning: false,
    priority: 'highest',
    labels: [],
    created: 'Dec 11, 2025',
    updated: 'Dec 11, 2025',
    reporter: { name: 'Ritesh Kumar', avatar: 'RK' },
    hasChildren: false,
  },
];

// --- Shared Grid Layout ---
// Defines the width of each column in the grid
const gridLayoutClass = "grid grid-cols-[40px_60px_100px_1fr_130px_150px_150px_160px_100px_150px_150px_150px_200px] items-center";

// --- SUB-COMPONENTS ---

// 1. Table Header Row
const ListTableHeader = () => (
  <div className={`bg-bg-tertiary text-[11px] font-bold text-text-secondary uppercase tracking-wider ${gridLayoutClass} border-b border-border-main py-3 shrink-0`}>
    <div className="px-2 text-center">
        <input type="checkbox" className="rounded-[2px] border-border-main bg-bg-primary cursor-pointer" />
    </div>
    <div className="px-2">Type</div>
    <div className="px-2">Key</div>
    <div className="px-2">Summary</div>
    <div className="px-2">Status</div>
    <div className="px-2">Comments</div>
    <div className="px-2">Assignee</div>
    <div className="px-2">Due date</div>
    <div className="px-2">Priority</div>
    <div className="px-2">Labels</div>
    <div className="px-2">Created</div>
    <div className="px-2">Updated</div>
    <div className="px-2 flex justify-between items-center">
        <span>Reporter</span>
        <Plus size={14} className="cursor-pointer hover:text-text-primary" />
    </div>
  </div>
);

// 2. Table Body Row
const ListTableRow = ({ item }) => {
    // Helper to get type icon and color
    const getTypeInfo = (type) => {
        switch(type) {
            case 'epic': return { icon: Zap, color: 'text-purple-500', fill: 'currentColor' };
            case 'task': return { icon: CheckSquare, color: 'text-blue-500', fill: 'none' };
            default: return { icon: CheckSquare, color: 'text-blue-500', fill: 'none' };
        }
    };

    // Helper for priority icon
    const getPriorityIcon = (priority) => {
        switch(priority) {
            case 'medium': 
                return <AlignJustify size={14} className="text-warning-500 rotate-90" />;
            case 'highest':
                return <ChevronsUp size={14} className="text-error-500" />;
            default: return null;
        }
    };

    const { icon: TypeIcon, color: typeColor, fill: typeFill } = getTypeInfo(item.type);

    return (
        <div className={`${gridLayoutClass} border-b border-border-main hover:bg-neutral-100/5 transition-colors py-2 text-sm text-text-primary group`}>
            {/* 1. Checkbox & Drag Handle */}
            <div className="px-2 flex items-center justify-center group/handle">
                <GripVertical size={14} className="text-text-secondary opacity-0 group-hover/handle:opacity-100 cursor-grab mr-1" />
                <input type="checkbox" className="rounded-[2px] border-border-main bg-bg-primary cursor-pointer" />
            </div>
            
            {/* 2. Type */}
            <div className="px-2 flex items-center">
                {item.hasChildren && <ChevronRight size={14} className="text-text-secondary mr-1 cursor-pointer" />}
                <TypeIcon size={14} className={typeColor} fill={typeFill} />
            </div>
            
            {/* 3. Key */}
            <div className="px-2 text-text-secondary">{item.key}</div>
            
            {/* 4. Summary */}
            <div className="px-2 font-medium truncate pr-4">{item.summary}</div>
            
            {/* 5. Status */}
            <div className="px-2">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.5 rounded-[3px] uppercase">
                    {item.status}
                </span>
            </div>
            
            {/* 6. Comments */}
            <div className="px-2 flex items-center text-text-secondary gap-1 cursor-pointer hover:text-text-primary">
                <MessageSquare size={14} />
                <span className="text-xs">Add comment</span>
            </div>
            
            {/* 7. Assignee */}
            <div className="px-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center border border-border-main text-text-secondary">
                    <User size={14} />
                </div>
            </div>
            
            {/* 8. Due date */}
            <div className="px-2">
                {item.dueDate && (
                    <div className={`flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded-[3px] border ${item.dueDateWarning ? 'bg-error-bg text-error-text border-error-text' : 'bg-neutral-100 text-text-secondary border-transparent'}`}>
                        {item.dueDateWarning && <AlertTriangle size={12} />}
                        {item.dueDate}
                    </div>
                )}
            </div>

             {/* 9. Priority */}
             <div className="px-2 flex items-center justify-center">
                {getPriorityIcon(item.priority)}
            </div>

            {/* 10. Labels */}
            <div className="px-2 flex items-center text-text-secondary gap-1 cursor-pointer hover:text-text-primary">
                <Plus size={14} />
                <span className="text-xs">Add label</span>
            </div>

            {/* 11. Created */}
            <div className="px-2 flex items-center gap-1.5 text-text-secondary text-xs">
                <Calendar size={14} />
                <span>{item.created}</span>
            </div>

            {/* 12. Updated */}
            <div className="px-2 flex items-center gap-1.5 text-text-secondary text-xs">
                <Calendar size={14} />
                <span>{item.updated}</span>
            </div>

            {/* 13. Reporter */}
            <div className="px-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                    {item.reporter.avatar}
                </div>
                <span className="text-text-primary text-xs">{item.reporter.name}</span>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const ListPage = () => {
  return (
    <div className="h-full flex flex-col bg-bg-secondary overflow-hidden">
      
      {/* 1. HEADER (Same as Kanban) */}
      <div className="px-5 py-4 flex items-center justify-between shrink-0 border-b border-border-main">
        <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search list" 
                    className="bg-bg-tertiary border border-border-main text-text-primary text-sm rounded-[3px] py-1.5 pl-8 pr-3 w-40 focus:w-56 transition-all focus:outline-none focus:border-accent placeholder:text-text-secondary"
                />
                <Search size={16} className="absolute left-2 top-2 text-text-secondary" />
            </div>

            {/* Avatar */}
            <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-bg-secondary flex items-center justify-center text-[10px] text-white font-bold">RK</div>

            {/* Filter Button */}
            <button className="flex items-center gap-1.5 text-text-secondary hover:bg-neutral-100/10 px-2 py-1.5 rounded-[3px] transition-colors">
                <SlidersHorizontal size={16} />
                <span className="text-sm font-medium">Filter</span>
            </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-text-primary bg-bg-tertiary hover:bg-neutral-100/10 border border-border-main px-3 py-1.5 rounded-[3px] text-sm font-medium transition-colors">
                <span>Group</span>
                <ChevronDown size={14} />
            </button>
            <div className="h-4 w-[1px] bg-border-main mx-1"></div>
            <button className="p-2 text-text-secondary hover:bg-neutral-100/10 rounded-[3px]">
                <BarChart2 size={18} />
            </button>
            <button className="p-2 text-text-secondary hover:bg-neutral-100/10 rounded-[3px] bg-neutral-100/10">
                <List size={18} />
            </button>
            <button className="p-2 text-text-secondary hover:bg-neutral-100/10 rounded-[3px]">
                <MoreHorizontal size={18} />
            </button>
        </div>
      </div>

      {/* 2. TABLE AREA (Horizontally Scrollable) */}
      <div className="flex-1 overflow-auto p-2">
        <div className="min-w-max">
            <ListTableHeader />
            <div>
                {listData.map((item) => (
                    <ListTableRow key={item.id} item={item} />
                ))}
            </div>
            {/* Create Button Row */}
            <div className="border-b border-border-main hover:bg-neutral-100/5 transition-colors py-2 px-2 flex items-center text-text-secondary cursor-pointer group">
                <Plus size={16} className="mr-2 group-hover:text-text-primary" />
                <span className="text-sm group-hover:text-text-primary">Create</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ListPage;