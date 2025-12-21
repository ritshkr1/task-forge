import React from 'react';
import { 
  Search, Bell, Settings, HelpCircle, Grid, Plus, 
  ChevronDown, Code, Clock, Layout, 
  FileText, Trello, List
} from 'lucide-react';

// 1. TOP NAVIGATION
const TopNavbar = () => {
  return (
    // Uses --bg-tertiary (Headers) and --border-color
    <nav className="h-14 border-b border-border-main bg-bg-tertiary px-4 flex items-center justify-between shrink-0 z-20 relative transition-colors duration-200">
      <div className="flex items-center gap-4">
        {/* App Switcher */}
        <button className="p-2 hover:bg-neutral-100 rounded-md text-text-secondary transition-colors">
          <Grid size={20} />
        </button>
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-accent tracking-tight">
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-white text-xs">T</div>
          <span className="text-text-primary">Task Forge</span>
        </div>

        {/* Global Menus */}
        {/* <div className="hidden md:flex items-center gap-1 ml-4">
          {['Your Work', 'Projects', 'Filters', 'Dashboards', 'Teams'].map((item) => (
            <button key={item} className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:bg-neutral-100 hover:text-text-primary rounded-md flex items-center gap-1 transition-colors">
              {item} <ChevronDown size={14} />
            </button>
          ))}
        </div> */}
      </div>

      <div className="flex items-center gap-2">
        {/* Search Bar - Uses --neutral-200 (Input bg) and --border-light */}
        <div className="relative group mr-2">
          <Search className="absolute left-2 top-1.5 text-text-secondary group-focus-within:text-accent" size={16} />
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-8 pr-4 py-1.5 bg-neutral-200 border border-border-light rounded-[3px] text-sm w-64 focus:w-96 text-text-primary placeholder:text-text-secondary transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Create Button - Uses --accent */}
        <button className="ml-2 bg-accent text-white hover:bg-accent-dark text-sm font-medium px-3 py-1.5 rounded-[3px] transition-all">
            Create
        </button>
        
        {/* Action Icons */}
        {/* Bell, */}
        {[ HelpCircle, Settings].map((Icon, idx) => (
          <button key={idx} className="p-2 text-text-secondary hover:bg-neutral-100 hover:text-text-primary rounded-full transition-colors">
            <Icon size={20} />
          </button>
        ))}
        
        {/* Profile */}
        <button className="ml-1 w-8 h-8 rounded-full bg-todo-text text-white flex items-center justify-center text-xs font-bold ring-2 ring-transparent hover:ring-border-main">
          RK
        </button>
      </div>
    </nav>
  );
};

// 2. SIDEBAR
const Sidebar = () => {
  return (
    <aside className="w-64 bg-bg-primary border-r border-border-main hidden md:flex flex-col h-full shrink-0 transition-colors duration-200">
      
      {/* 1. SCROLLABLE MIDDLE SECTION (Expands to fill space) */}
      <div className="flex-1 overflow-y-auto min-h-0">
        
        {/* Project Context Header */}
        <div className="p-4 flex items-center gap-3 hover:bg-neutral-100 cursor-pointer transition-colors group">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-[3px] flex items-center justify-center shrink-0">
            <Code className="text-white" size={18} />
          </div>
          <div className="overflow-hidden">
            <h2 className="text-sm font-semibold text-text-primary truncate">Chatbot Support</h2>
            <p className="text-xs text-text-secondary truncate">Software project</p>
          </div>
          <ChevronDown size={16} className="ml-auto opacity-0 group-hover:opacity-100 text-text-secondary" />
        </div>

        {/* Navigation Links */}
        <div className="px-2 py-2 space-y-1">
          {[
            { icon: Layout, label: 'Summary',active: true , disabled : false},
            { icon: List, label: 'List' , disabled : false},
            { icon: Trello, label: 'Board', disabled : false},
            { icon: Code, label: 'Code' , disabled : true},
            { icon: Clock, label: 'Timeline' , disabled : true},
            { icon: FileText, label: 'Pages' , disabled : true},
          ].map((item, idx) => (
            <button 
  key={idx} 
  disabled={item.disabled}
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-[3px] text-sm font-medium transition-colors ${
    item.disabled 
      ? 'opacity-50 cursor-not-allowed text-text-muted hover:bg-transparent' 
      : item.active 
        ? 'bg-neutral-100 text-accent' 
        : 'text-text-secondary hover:bg-neutral-100 hover:text-text-primary'
  }`}
>
  <item.icon 
    size={18} 
    className={
      item.disabled 
        ? "text-text-muted" 
        : item.active 
          ? "text-accent" 
          : "text-text-secondary"
    } 
  />
  {item.label}
</button>
          ))}
        </div>

        <div className="my-2 border-t border-border-main mx-4"></div>

        {/* Secondary Nav */}
        <div className="px-2 space-y-1 pb-4">
           <div className="px-3 py-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
             Development
           </div>
           <button className="w-full flex items-center gap-3 px-3 py-2 rounded-[3px] text-sm font-medium text-text-secondary hover:bg-neutral-100 hover:text-text-primary transition-colors">
              <Code size={18} /> Github
           </button>
        </div>
      </div>

      {/* 2. PINNED FOOTER (Stays at bottom) */}
      <div className="p-4 border-t border-border-main bg-bg-primary shrink-0 z-10">
         <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-text-secondary">
               Task Forge <span className="text-text-muted font-normal">v1.0.0</span>
            </p>
            <p className="text-[10px] text-text-muted">
               Designed by <span className="text-text-primary hover:underline cursor-pointer">Ritesh</span>
            </p>
         </div>
      </div>

    </aside>
  );
};

// 3. MAIN LAYOUT
const JiraLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden font-sans">
      
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Uses --bg-secondary (Main Canvas) */}
        <main className="flex-1 overflow-y-auto bg-bg-secondary relative transition-colors duration-200">
          
          {/* Breadcrumbs & Header */}
          <div className="px-8 pt-6 pb-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
               <span className="hover:underline cursor-pointer">Projects</span> 
               <span>/</span>
               <span className="hover:underline cursor-pointer">Chatbot for Customer Support</span>
            </div>
          </div>

          {children}

        </main>
      </div>
    </div>
  );
};

export default JiraLayout;