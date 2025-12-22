import { useState,useEffect } from "react"; // Import useState
import { NavLink } from "react-router"; // Ensure using react-router-dom
import {
  Search,
  Bell,
  Settings,
  HelpCircle,
  Plus,
  ChevronDown,
  Code,
  Clock,
  Layout,
  FileText,
  Trello,
  List,
  Menu,
  X, // Import X for closing sidebar
} from "lucide-react";
import { useNavigate } from "react-router";

// 1. TOP NAVIGATION
const TopNavbar = ({ onMenuClick }) => {
  return (
    <nav className="h-14 border-b border-border-main bg-bg-tertiary px-4 flex items-center justify-between shrink-0 z-20 relative transition-colors duration-200">
      <div className="flex items-center gap-4">
        
        {/* MOBILE MENU BUTTON - Visible only on mobile (md:hidden) */}
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-neutral-100 rounded-md text-text-secondary transition-colors md:hidden"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-accent tracking-tight">
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-white text-xs">
            T
          </div>
          <span className="text-text-primary">Task Forge</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search Bar - Hidden on small mobile, visible on tablet+ */}
        <div className="relative group mr-2 hidden sm:block">
          <Search
            className="absolute left-2 top-1.5 text-text-secondary group-focus-within:text-accent"
            size={16}
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-1.5 bg-neutral-200 border border-border-light rounded-[3px] text-sm w-48 md:w-64 focus:w-72 md:focus:w-96 text-text-primary placeholder:text-text-secondary transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Create Button - Icon only on mobile, Text on Desktop */}
        <button className="ml-2 bg-accent text-text-primary text-sm font-medium px-2 md:px-3 py-1.5 rounded-[3px] transition-all flex items-center gap-1">
          <Plus size={19} />
          <span className="hidden md:inline">Create</span>
        </button>

        {/* Action Icons - Hidden on very small screens if needed */}
        <div className="hidden sm:flex items-center">
          {[HelpCircle, Settings].map((Icon, idx) => (
            <button
              key={idx}
              className="p-2 text-text-secondary hover:bg-neutral-100 hover:text-text-primary rounded-full transition-colors"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Profile */}
        <button className="ml-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-transparent hover:ring-border-main">
          RK
        </button>
      </div>
    </nav>
  );
};

// 2. SIDEBAR
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* MOBILE OVERLAY BACKDROP */}
      {/* Only visible when isOpen is true AND on mobile (md:hidden) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside 
        className={`
          fixed md:relative z-40 h-full
          inset-y-0 left-0 
          w-64 bg-bg-primary border-r border-border-main 
          flex flex-col shrink-0 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        {/* Mobile Header with Close Button */}
        <div className="flex md:hidden items-center justify-between p-4 border-b border-border-light">
           <span className="font-bold text-lg text-text-primary">Menu</span>
           <button onClick={onClose} className="p-1 hover:bg-neutral-100 rounded">
             <X size={20} className="text-text-secondary"/>
           </button>
        </div>

        {/* 1. SCROLLABLE MIDDLE SECTION */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Project Context Header */}
          <div className="p-4 flex items-center gap-3 hover:bg-neutral-100 cursor-pointer transition-colors group">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-[3px] flex items-center justify-center shrink-0">
              <Code className="text-white" size={18} />
            </div>
            <div className="overflow-hidden">
              <h2 className="text-sm font-semibold text-text-primary truncate">
                Chatbot Support
              </h2>
              <p className="text-xs text-text-secondary truncate">
                Software project
              </p>
            </div>
            <ChevronDown
              size={16}
              className="ml-auto opacity-0 group-hover:opacity-100 text-text-secondary"
            />
          </div>

          {/* Navigation Links */}
          <div className="px-2 py-2 space-y-1">
            {[
              { icon: Layout, label: "Summary",  disabled: false, navLink: '/' },
              { icon: List, label: "List", disabled: false , navLink: '/list'},
              { icon: Trello, label: "Board", disabled: false , navLink: '/board'},
              { icon: Code, label: "Code", disabled: true },
              { icon: Clock, label: "Timeline", disabled: true },
              { icon: FileText, label: "Pages", disabled: true },
            ].map((item, idx) => (
              <NavLink 
                key={idx} 
                to={item.navLink ? item.navLink: '/'}
                onClick={() => onClose()} // Close sidebar on mobile when link clicked
                className={({ isActive }) => `
                  block w-full text-left
                  ${item.disabled ? "pointer-events-none" : ""}
                `}
              >
               {({ isActive }) => (
                  <div
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-[3px] text-sm font-medium transition-colors ${
                      item.disabled
                        ? "opacity-50 cursor-not-allowed text-text-muted hover:bg-transparent"
                        : isActive
                        ? "bg-neutral-100 text-accent"
                        : "text-text-secondary hover:bg-neutral-100 hover:text-text-primary"
                    }`}
                  >
                    <item.icon
                      size={18}
                      className={
                        item.disabled
                          ? "text-text-muted"
                          : isActive
                          ? "text-accent"
                          : "text-text-secondary"
                      }
                    />
                    {item.label}
                  </div>
               )}
              </NavLink>
            ))}
          </div>

          <div className="my-2 border-t border-border-main mx-4"></div>

          {/* Secondary Nav */}
          <div className="px-2 space-y-1 pb-4">
            <div className="px-3 py-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
              Development
            </div>
            <a className="w-full flex items-center gap-3 px-3 py-2 rounded-[3px] text-sm font-medium text-text-secondary hover:bg-neutral-100 hover:text-text-primary transition-colors"
               href="https://github.com/riteshkrdev/task-forge" 
               target="_blank"   
               rel="noopener noreferrer">
              <Code size={18} /> Github
            </a>
          </div>
        </div>

        {/* 2. PINNED FOOTER */}
        <div className="p-4 border-t border-border-main bg-bg-primary shrink-0 z-10">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-text-secondary">
              Task Forge{" "}
              <span className="text-text-muted font-normal">v1.0.0</span>
            </p>
            <p className="text-[10px] text-text-muted">
              Designed by{" "}
              <a href="https://github.com/riteshkrdev" 
                 target="_blank"   
                 rel="noopener noreferrer" className="text-text-primary hover:underline cursor-pointer">
                Ritesh
              </a>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

// 3. MAIN LAYOUT
const JiraLayout = ({ children }) => {
  // State to control mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let navigate = useNavigate();
 

  useEffect(() => {
    navigate("/list");
  },[]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden font-sans">
      {/* Pass toggle function to TopNavbar */}
      <TopNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Pass state and close function to Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        {/* Uses --bg-secondary (Main Canvas) */}
        <main className="flex-1 overflow-y-auto bg-bg-secondary relative transition-colors duration-200 w-full">
          {/* Breadcrumbs & Header */}
          <div className="px-4 md:px-8 pt-6 pb-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
              <span className="hover:underline cursor-pointer">Projects</span>
              <span>/</span>
              <span className="hover:underline cursor-pointer truncate">
                Chatbot for Customer Support
              </span>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
};

export default JiraLayout;