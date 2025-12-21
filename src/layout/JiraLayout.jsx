import React, { useState } from 'react';
import { 
  Search, Bell, Settings, HelpCircle, Grid, Plus, 
  ChevronDown, User, Star, Clock, Layout, Users, 
  FileText, Trello, Code, List, MoreHorizontal
} from 'lucide-react';

// 1. TOP NAVIGATION COMPONENT
const TopNavbar = () => {
  return (
    <nav className="h-14 border-b border-gray-200 bg-background px-4 flex items-center justify-between shrink-0 z-20 relative">
      <div className="flex items-center gap-4">
        {/* App Switcher */}
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Grid size={20} className="text-gray-600" />
        </button>
        
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 font-bold text-xl text-blue-900 tracking-tight">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">J</div>
          Jira
        </div>

        {/* Global Menus */}
        <div className="hidden md:flex items-center gap-1 ml-4">
          {['Your Work', 'Projects', 'Filters', 'Dashboards', 'Teams', 'Apps'].map((item) => (
            <button key={item} className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center gap-1">
              {item} <ChevronDown size={14} />
            </button>
          ))}
          <button className="ml-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-3 py-1.5 rounded-[3px] transition-colors">
            Create
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative group mr-2">
          <Search className="absolute left-2 top-1.5 text-gray-500 group-focus-within:text-blue-600" size={16} />
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-8 pr-4 py-1.5 bg-white border border-gray-300 rounded-[3px] text-sm w-48 focus:w-64 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Icons */}
        {[Bell, HelpCircle, Settings].map((Icon, idx) => (
          <button key={idx} className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Icon size={20} />
          </button>
        ))}
        
        {/* Profile */}
        <button className="ml-1 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-transparent hover:ring-gray-200">
          RK
        </button>
      </div>
    </nav>
  );
};

// 2. SIDEBAR COMPONENT
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 flex-col hidden md:flex shrink-0 h-[calc(100vh-3.5rem)] overflow-y-auto">
      {/* Project Context Header */}
      <div className="p-4 flex items-center gap-3 hover:bg-gray-200 cursor-pointer transition-colors group">
        <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-[3px] flex items-center justify-center shrink-0">
          <Code className="text-white" size={18} />
        </div>
        <div className="overflow-hidden">
          <h2 className="text-sm font-semibold text-gray-700 truncate">Chatbot for Customer Support</h2>
          <p className="text-xs text-gray-500 truncate">Software project</p>
        </div>
        <ChevronDown size={16} className="ml-auto opacity-0 group-hover:opacity-100 text-gray-500" />
      </div>

      {/* Navigation Links */}
      <div className="px-2 py-2 space-y-1">
        {[
          { icon: Layout, label: 'Summary' },
          { icon: List, label: 'List' },
          { icon: Trello, label: 'Board' },
          { icon: Code, label: 'Code' },
          { icon: Clock, label: 'Timeline' },
          { icon: FileText, label: 'Pages' },
          { icon: Plus, label: 'Add view' },
        ].map((item, idx) => (
          <button 
            key={idx} 
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-[3px] text-sm font-medium ${idx === 0 ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="my-2 border-t border-gray-200 mx-4"></div>

      {/* Secondary Nav */}
      <div className="px-2 space-y-1">
         <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            Development
         </div>
         <button className="w-full flex items-center gap-3 px-3 py-2 rounded-[3px] text-sm font-medium text-gray-600 hover:bg-gray-200">
            <Code size={18} /> Releases
         </button>
      </div>
    </aside>
  );
};

// 3. MAIN LAYOUT WRAPPER
const JiraLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-white overflow-hidden font-sans">
      
      {/* Top Navbar: Fixed Height */}
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Fixed Width, Scrollable independent of body */}
        <Sidebar />

        {/* Main Content Area: Flex Grow, Scrollable */}
        <main className="flex-1 overflow-y-auto bg-white relative">
          
          {/* Page-Specific Header (Breadcrumbs + Actions) */}
          <div className="px-8 pt-6 pb-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
               <span>Projects</span> 
               <span>/</span>
               <span>Chatbot for Customer Support</span>
            </div>
            
            <div className="flex justify-between items-start">
               <h1 className="text-2xl font-semibold text-gray-800">Summary</h1>
               <div className="flex gap-2">
                 {/* Example Header Buttons */}
                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-[3px] text-sm font-medium transition-colors">
                    Manage Space
                 </button>
               </div>
            </div>
          </div>

          {/* DYNAMIC CONTENT (Your pages go here) */}
          <div className="px-8 py-4">
             {children}
          </div>

        </main>
      </div>
    </div>
  );
};

export default JiraLayout;