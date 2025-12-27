import { useCustomGlobalModal } from '../modal/ModalContext';
import { useTasks } from "../components/TaskListContext";
import {
  Search,
  Settings,
  HelpCircle,
  Plus,
  Menu,
} from "lucide-react";
const Header = ({ onMenuClick }) => {
  const {openModal} = useCustomGlobalModal();
  const {searchTask} = useTasks();
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
            onChange={(e) => searchTask(e.target.value.toLowerCase())}
            placeholder="Search"
            className="pl-8 pr-4 py-1.5 bg-neutral-200 border border-border-light rounded-[3px] text-sm w-48 md:w-64 focus:w-72 md:focus:w-96 text-text-primary placeholder:text-text-secondary transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Create Button - Icon only on mobile, Text on Desktop */}
        <button onClick={() => openModal(null)} className="ml-2 bg-accent text-text-primary text-sm font-medium px-2 md:px-3 py-1.5 rounded-[3px] transition-all flex items-center gap-1">
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

export default Header;