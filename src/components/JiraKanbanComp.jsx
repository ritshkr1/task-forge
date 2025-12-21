import React from 'react';
import { 
  Search, Plus, MoreHorizontal, ChevronDown, 
  BarChart2, List, SlidersHorizontal, User 
} from 'lucide-react';

// --- MOCK DATA (Matching Screenshot image_6166cd.png) ---
const boardData = {
  columns: [
    {
      id: 'todo',
      title: 'TO DO',
      count: 1,
      items: [
        {
          id: 'CCS-6',
          title: '(Sample) Develop Frontend Interface',
          epic: '(SAMPLE) CHATBOT DEVELOPMENT',
          epicColor: 'text-purple-300 bg-purple-900/50 border-purple-800', // Mocking the purple badge
          type: 'story', // Green bookmark icon
        }
      ]
    },
    {
      id: 'inprogress',
      title: 'IN PROGRESS',
      count: 4,
      items: [
        {
          id: 'CCS-4',
          title: '(Sample) Design Chatbot Personality',
          epic: '(SAMPLE) USER INTERACTION DESIGN',
          epicColor: 'text-purple-300 bg-purple-900/50 border-purple-800',
          type: 'story',
        },
        {
          id: 'CCS-5',
          title: '(Sample) Implement NLP Engine',
          epic: '(SAMPLE) CHATBOT DEVELOPMENT',
          epicColor: 'text-purple-300 bg-purple-900/50 border-purple-800',
          type: 'task', // Blue check
        },
        {
          id: 'CCS-7',
          title: 'test',
          epic: null,
          type: 'task',
          priority: 'medium' // Orange lines
        }
      ]
    },
    {
      id: 'review',
      title: 'IN REVIEW',
      count: 1,
      items: [
        {
          id: 'CCS-3',
          title: '(Sample) Create User Flow Diagram',
          epic: '(SAMPLE) USER INTERACTION DESIGN',
          epicColor: 'text-purple-300 bg-purple-900/50 border-purple-800',
          type: 'task',
        }
      ]
    },
    {
      id: 'done',
      title: 'DONE',
      count: 0, // Header shows Checkmark usually if all done, or count
      isDoneColumn: true,
      items: []
    }
  ]
};

// --- SUB-COMPONENTS ---

// 1. Kanban Card
const KanbanCard = ({ item }) => {
  return (
    <div className="bg-card-bg border border-border-main p-3 rounded-[3px] shadow-sm mb-2 hover:bg-card-bg-hover cursor-pointer group transition-colors">
      {/* Title */}
      <p className="text-[14px] text-text-primary font-medium leading-snug mb-3">
        {item.title}
      </p>

      {/* Epic Badge */}
      {item.epic && (
        <div className={`inline-block px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold uppercase tracking-wider mb-3 border ${item.epicColor}`}>
          {item.epic}
        </div>
      )}

      {/* Footer: Icon/Key + Avatar */}
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1.5">
          {/* Issue Type Icon */}
          {item.type === 'story' ? (
            <div className="w-3.5 h-3.5 bg-green-600 rounded-[1px] flex items-center justify-center">
               <div className="w-1.5 h-2 border-l border-white/80"></div>
            </div>
          ) : (
            <div className="w-3.5 h-3.5 bg-blue-500 rounded-[1px] flex items-center justify-center text-white text-[8px] font-bold">✓</div>
          )}
          
          <span className="text-xs text-text-secondary hover:underline">{item.id}</span>
        </div>

        <div className="flex items-center gap-2">
            {item.priority === 'medium' && (
                <div className="rotate-90 flex gap-[1px]">
                    <div className="w-3 h-1 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-1 bg-orange-400 rounded-full"></div>
                </div>
            )}
            <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center border border-border-main hover:opacity-80">
                <User size={14} className="text-text-secondary" />
            </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const KanbanJiraBoard = () => {
  return (
    <div className="h-full flex flex-col bg-bg-secondary">
      
      {/* 1. BOARD HEADER (Filters & Controls) */}
      <div className="px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search board" 
                    className="bg-bg-tertiary border border-border-main text-text-primary text-sm rounded-[3px] py-1.5 pl-8 pr-3 w-40 focus:w-56 transition-all focus:outline-none focus:border-accent placeholder:text-text-secondary"
                />
                <Search size={16} className="absolute left-2 top-2 text-text-secondary" />
            </div>

            {/* Avatars */}
            <div className="flex -space-x-1">
                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-bg-secondary flex items-center justify-center text-[10px] text-white font-bold">RK</div>
                <div className="w-7 h-7 rounded-full bg-neutral-200 border-2 border-bg-secondary flex items-center justify-center text-[10px] text-text-secondary hover:bg-neutral-300 cursor-pointer">
                    <User size={14} />
                </div>
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-1.5 text-text-secondary hover:bg-neutral-100 px-2 py-1.5 rounded-[3px] transition-colors">
                <SlidersHorizontal size={16} />
                <span className="text-sm font-medium">Filter</span>
            </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-text-primary bg-bg-tertiary hover:bg-neutral-100 border border-border-main px-3 py-1.5 rounded-[3px] text-sm font-medium transition-colors">
                <span>Group</span>
                <ChevronDown size={14} />
            </button>
            <div className="h-4 w-[1px] bg-border-main mx-1"></div>
            <button className="p-2 text-text-secondary hover:bg-neutral-100 rounded-[3px]">
                <BarChart2 size={18} />
            </button>
            <button className="p-2 text-text-secondary hover:bg-neutral-100 rounded-[3px]">
                <List size={18} />
            </button>
            <button className="p-2 text-text-secondary hover:bg-neutral-100 rounded-[3px]">
                <MoreHorizontal size={18} />
            </button>
        </div>
      </div>

      {/* 2. KANBAN COLUMNS AREA */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden px-5 pb-4">
        <div className="flex h-full gap-4 min-w-max">
            
            {boardData.columns.map((column) => (
                <div key={column.id} className="w-[280px] flex flex-col h-full bg-bg-primary rounded-[3px] border border-transparent">
                    {/* Column Header */}
                    <div className="p-3 pb-2 flex items-center justify-between shrink-0 group mb-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                            <span className="truncate max-w-[180px]">{column.title}</span>
                            {column.count !== null && !column.isDoneColumn && (
                                <span className="bg-neutral-200 text-text-primary px-2 py-0.5 rounded-full min-w-[20px] text-center">{column.count}</span>
                            )}
                            {column.isDoneColumn && (
                                <span className="text-success-500 ml-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </span>
                            )}
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button className="p-1 hover:bg-neutral-100 rounded"><Plus size={14} className="text-text-secondary" /></button>
                             <button className="p-1 hover:bg-neutral-100 rounded"><MoreHorizontal size={14} className="text-text-secondary" /></button>
                        </div>
                    </div>

                    {/* Column Body (Scrollable Cards) */}
                    <div className="flex-1 overflow-y-auto px-2 min-h-0 custom-scrollbar">
                        {column.items.map((item) => (
                            <KanbanCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Column Footer (Create) */}
                    {!column.isDoneColumn && (
                         <div className="p-2 shrink-0">
                             <button className="w-full flex items-center gap-2 p-2 rounded-[3px] hover:bg-neutral-100 text-text-secondary text-sm transition-colors text-left group">
                                 <Plus size={16} className="group-hover:text-text-primary" />
                                 <span className="group-hover:text-text-primary">Create</span>
                             </button>
                         </div>
                    )}
                </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default KanbanJiraBoard;