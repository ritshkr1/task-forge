import { NavLink } from "react-router"; // Ensure using react-router-dom
import {
  ChevronDown,
  Code,
  Clock,
  Layout,
  FileText,
  Trello,
  List,
  X, // Import X for closing sidebar
} from "lucide-react";

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
                Task Forge
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
        <div className="p-2 border-t border-border-main bg-bg-primary shrink-0 z-10">
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

export default Sidebar;