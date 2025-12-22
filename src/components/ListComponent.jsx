import React from 'react';
import { 
  Search, SlidersHorizontal, ChevronDown, BarChart2, List, 
  MoreHorizontal, Plus, Zap, CheckSquare, MessageSquare, 
  AlertTriangle, Calendar, User, GripVertical, ChevronRight,
  AlignJustify, ChevronsUp
} from 'lucide-react';
import { ListData } from './ListData';

// --- MOCK DATA (Combining image_4.png & image_5.png) ---
const listData = [...ListData]

// --- Shared Grid Layout ---
// Defines the width of each column in the grid
const gridLayoutClass = "grid grid-cols-[100px_1fr_130px_150px_150px_160px_100px_150px_150px_150px_100px_150px] items-center";

const ListTableHeader = () => (
  <div className={`
    sticky top-0 z-20 
    bg-bg-tertiary text-[11px] font-bold text-text-secondary uppercase tracking-wider 
    ${gridLayoutClass} 
    border-b border-border-main py-2.5 shrink-0
  `}>
    <div className="flex justify-center group">
        <input type="checkbox" className="rounded-[2px] border-border-main bg-bg-primary cursor-pointer w-3.5 h-3.5" />
    </div>
    <div className="px-2 border-l border-transparent hover:border-border-main/50 transition-colors">Title</div>
    <div className="px-2">Status</div>
    <div className="px-2">Comments</div>
    <div className="px-2">Assignee</div>
    <div className="px-2">Due date</div>
    <div className="px-2">Priority</div>
    <div className="px-2">Labels</div>
    <div className="px-2">Created</div>
    <div className="px-2">Updated</div>
    <div className="px-2 flex justify-between items-center">
       Reporter
    </div>
    <div className="px-2">Action</div>
  </div>
);

const ListTableRow = ({ item }) => {
    const getPriorityIcon = (priority) => {
        switch(priority) {
            case 'medium': 
                return <AlignJustify size={14} className="text-orange-400 rotate-90" />;
            case 'highest':
                return <ChevronsUp size={14} className="text-red-500" />;
            case 'high':
                 return <ChevronsUp size={14} className="text-red-400" />;
            case 'low':
                return <ChevronDown size={14} className="text-blue-400" />;
            default: return null;
        }
    };

    return (
        <div className={`${gridLayoutClass} border-b border-border-main hover:bg-neutral-800/30 transition-colors py-2 text-text-primary group h-[48px]`}>
            {/* 1. Checkbox */}
            <div className="flex items-center justify-center group/handle h-full">
                 <input type="checkbox" className="rounded-[2px] border-border-main bg-bg-primary cursor-pointer w-3.5 h-3.5" />
            </div>
            
            {/* 2. Title */}
            <div className="px-2 font-medium text-[14px] text-blue-400 truncate pr-4 cursor-pointer hover:underline h-full flex items-center">
                {item.title}
            </div>
            
            {/* 3. Status */}
            <div className="px-2 h-full flex items-center">
                <span className={`
                    text-[10px] font-bold px-1.5 py-0.5 rounded-[3px] uppercase border
                    ${item.status === 'DONE' ? 'bg-green-900/30 text-green-400 border-green-900/50' : ''}
                    ${item.status === 'IN PROGRESS' ? 'bg-indigo-900/30 text-indigo-400 border-indigo-900/50' : ''}
                    ${item.status === 'TODO' ? 'bg-neutral-700/30 text-neutral-400 border-neutral-700/50' : ''}
                `}>
                    {item.status}
                </span>
            </div>
            
            {/* 4. Comments */}
            <div className="px-2 h-full flex items-center">
                {item.comments > 0 && (
                    <div className="flex items-center gap-1 text-text-secondary">
                            <MessageSquare size={12} />
                            <span className="text-xs">{item.comments}</span>
                    </div>
                )}
            </div>
            
            {/* 5. Assignee */}
            <div className="px-2 h-full flex items-center">
                {item.assignee && (
                     <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center border border-border-main text-text-secondary text-[10px]">
                        {item.assignee.avatar}
                    </div>
                )}
            </div>
            
            {/* 6. Due date */}
            <div className="px-2 h-full flex items-center">
                {item.dueDate && (
                    <div className={`flex w-fit items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded-[3px] border ${item.dueDateWarning ? 'bg-red-900/20 text-red-400 border-red-900/30' : 'text-text-secondary border-transparent'}`}>
                        {item.dueDateWarning && <AlertTriangle size={10} />}
                        {item.dueDate}
                    </div>
                )}
            </div>

             {/* 7. Priority */}
             <div className="px-2 h-full flex items-center">
                {getPriorityIcon(item.priority)}
                <span className="ml-2 capitalize text-text-primary text-xs">{item.priority}</span>
            </div>

            {/* 8. Labels */}
            <div className="px-2 h-full flex items-center gap-1 overflow-hidden">
                {item.labels.map(l => (
                        <span key={l} className="text-[10px] bg-neutral-800 text-text-secondary px-1.5 py-0.5 rounded border border-neutral-700/50">
                        {l}
                        </span>
                ))}
            </div>

            {/* 9. Created */}
            <div className="px-2 text-text-secondary text-xs h-full flex items-center">{item.created}</div>

            {/* 10. Updated */}
            <div className="px-2 text-text-secondary text-xs h-full flex items-center">{item.updated}</div>

            {/* 11. Reporter */}
            <div className="px-2 h-full flex items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                    {item.reporter.avatar}
                </div>
            </div>
            <div className="px-2 h-full flex items-center gap-2">
    <button 
        type="button" 
        onClick={() => editTask(item.id)}
        className="bg-green-400 hover:bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-[3px] transition-colors"
    >
        Edit
    </button>
    <button 
        type="button" 
        onClick={() => deleteTask(item.id)} 
        className="bg-red-400 hover:bg-red-500 text-white text-xs font-medium px-3 py-1.5 rounded-[3px] transition-colors"
    >
        Delete
    </button>
</div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const ListPage = () => {
  return (
    <>
    <div className="h-[calc(100vh-150px)] flex flex-col bg-bg-secondary overflow-hidden text-text-primary">
      
      {/* 1. HEADER */}
      <div className="px-5 py-3 flex items-center justify-between shrink-0 border-b border-border-main bg-bg-secondary">
        <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative group">
                <input 
                    type="text" 
                    placeholder="Search list" 
                    className="bg-bg-tertiary border border-border-main text-text-primary text-sm rounded-[3px] py-1.5 pl-8 pr-3 w-40 focus:w-64 transition-all focus:outline-none focus:border-blue-500 placeholder:text-text-secondary"
                />
                <Search size={16} className="absolute left-2 top-2 text-text-secondary group-focus-within:text-blue-500" />
            </div>
            
            <div className="h-6 w-[1px] bg-border-main"></div>

            {/* Filter Button */}
            <button className="flex items-center gap-1.5 text-text-primary bg-bg-tertiary hover:bg-neutral-800 px-3 py-1.5 rounded-[3px] transition-colors border border-transparent hover:border-border-main">
                <SlidersHorizontal size={16} />
                <span className="text-sm font-medium">Filter</span>
            </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-text-primary bg-bg-tertiary hover:bg-neutral-800 border border-border-main px-3 py-1.5 rounded-[3px] text-sm font-medium transition-colors">
                <span>Group</span>
                <ChevronDown size={14} />
            </button>
            {/* <div className="p-1 bg-neutral-800/50 rounded flex gap-1">
                <button className="p-1.5 text-text-secondary hover:text-text-primary rounded hover:bg-neutral-700">
                    <BarChart2 size={16} />
                </button>
                <button className="p-1.5 text-text-primary bg-neutral-700 rounded shadow-sm">
                    <List size={16} />
                </button>
            </div> */}
            <button className="p-2 text-text-secondary hover:bg-neutral-800 rounded-[3px]">
                <MoreHorizontal size={18} />
            </button>
        </div>
      </div>

      {/* 2. TABLE AREA */}
      {/* flex-1 fills remaining space. overflow-auto allows scrolling INSIDE this div. */}
      <div className="flex-1 overflow-auto custom-scrollbar relative bg-bg-secondary">
        {/* Min-width ensures columns don't squash */}
        <div className="min-w-[1600px] pb-10"> 
            
            <ListTableHeader />
            
            <div>
                {listData.map((item) => (
                    <ListTableRow key={item.id} item={item} />
                ))}
                
                {/* Create Button Row */}
                <div className="border-b border-border-main hover:bg-neutral-800/30 transition-colors py-2 flex items-center text-text-secondary cursor-pointer group h-[48px]">
                    <div className="w-[40px] flex justify-center">
                        <Plus size={16} className="group-hover:text-text-primary" />
                    </div>
                    <span className="text-sm group-hover:text-text-primary font-medium">Create</span>
                </div>
            </div>
            
        </div>
      </div>

    </div>
    </>
  );
};

export default ListPage;