import React, { useState, useEffect } from 'react';
import { useCustomGlobalModal } from "./ModalContext";
import { 
  X, Calendar, User, Tag, Flag, CheckCircle, 
  Clock, AlertCircle, ChevronDown, Paperclip 
} from 'lucide-react'; // Assuming you use lucide-react for icons, standard in React/Tailwind

export const CommonTaskModal = () => {
    const { isOpen, modalData, closeModal } = useCustomGlobalModal();
    
    // Local state to handle form inputs (pre-filled if editing)
    const [formData, setFormData] = useState({
        title: '',
        description: '', // Not in JSON but essential for Jira tasks
        status: 'TODO',
        priority: 'medium',
        assignee: null,
        labels: [],
        dueDate: ''
    });

    // Populate state when modal opens with data
    useEffect(() => {
        if (isOpen && modalData) {
            setFormData({
                title: modalData.title || '',
                description: modalData.description || '',
                status: modalData.status || 'TODO',
                priority: modalData.priority || 'medium',
                assignee: modalData.assignee || null,
                labels: modalData.labels || [],
                dueDate: modalData.dueDate || ''
            });
        } else if (isOpen && !modalData) {
            // Reset for "Create New" mode
            setFormData({ title: '', description: '', status: 'TODO', priority: 'medium', assignee: null, labels: [], dueDate: '' });
        }
    }, [isOpen, modalData]);

    if (!isOpen) return null;

    // Helper to determine status color based on your theme vars
    const getStatusColor = (status) => {
        switch(status) {
            case 'DONE': return 'bg-success-bg text-success-text';
            case 'IN_PROGRESS': return 'bg-info-bg text-info-text';
            default: return 'bg-todo-bg text-todo-text';
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop with blur */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-card-bg rounded-lg shadow-2xl overflow-hidden border border-border-main animate-in fade-in zoom-in-95 duration-200">
                
                {/* --- Header --- */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-bg-tertiary">
                    <div className="flex items-center gap-3">
                         {/* Breadcrumb / ID */}
                        {modalData?.id ? (
                            <span className="text-sm font-medium text-text-secondary hover:underline cursor-pointer">
                                TASK-{modalData.id}
                            </span>
                        ) : (
                            <span className="text-sm font-medium text-text-secondary">New Issue</span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={closeModal} className="p-2 rounded hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* --- Body (Scrollable) --- */}
                <div className="flex-1 overflow-hidden">
                    <div className="h-full flex flex-col md:flex-row">
                        
                        {/* LEFT COLUMN: Main Content (Title, Desc) */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar border-r border-border-light">
                            
                            {/* Title Input */}
                            <div className="mb-6">
                                <label className="sr-only">Task Title</label>
                                <input 
                                    type="text" 
                                    placeholder="Issue Summary" 
                                    className="w-full text-2xl font-semibold bg-transparent border-none focus:ring-2 focus:ring-accent rounded px-2 py-1 -ml-2 text-text-primary placeholder:text-text-muted"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                />
                            </div>

                            {/* Description Section */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-text-primary mb-2">Description</label>
                                <textarea 
                                    className="w-full min-h-[150px] p-4 bg-bg-secondary rounded-md border border-border-light focus:border-accent focus:ring-1 focus:ring-accent text-text-primary resize-y placeholder:text-text-muted transition-all"
                                    placeholder="Add a description..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                />
                            </div>

                            {/* Activity / Comments Placeholder */}
                            <div className="mt-8">
                                <h3 className="text-sm font-semibold text-text-primary mb-4">Activity</h3>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                                        ME
                                    </div>
                                    <div className="flex-1">
                                        <div className="border border-border-light rounded-md bg-bg-secondary hover:bg-card-bg-hover transition-colors cursor-text p-3 text-text-muted text-sm">
                                            Add a comment...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Metadata (Sidebar) */}
                        <div className="w-full md:w-80 bg-bg-primary/30 p-6 overflow-y-auto custom-scrollbar space-y-6">
                            
                            {/* Status Dropdown Trigger */}
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Status</label>
                                <button className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-semibold uppercase tracking-wide transition-all ${getStatusColor(formData.status)}`}>
                                    <span>{formData.status}</span>
                                    <ChevronDown size={14} />
                                </button>
                            </div>

                            {/* Assignee */}
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Assignee</label>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-bg-secondary cursor-pointer transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs ring-2 ring-transparent group-hover:ring-accent">
                                        {formData.assignee ? formData.assignee.avatar : <User size={16}/>}
                                    </div>
                                    <span className="text-sm text-text-primary">
                                        {formData.assignee ? formData.assignee.name : "Unassigned"}
                                    </span>
                                </div>
                            </div>

                            {/* Priority */}
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Priority</label>
                                <div className="flex items-center gap-2 text-text-primary text-sm p-2 hover:bg-bg-secondary rounded cursor-pointer">
                                    <Flag size={16} className={formData.priority === 'highest' ? 'text-error-text' : 'text-text-muted'} />
                                    <span className="capitalize">{formData.priority}</span>
                                </div>
                            </div>

                            {/* Labels */}
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Labels</label>
                                <div className="flex flex-wrap gap-2">
                                    {formData.labels.map((label, idx) => (
                                        <span key={idx} className="px-2 py-0.5 rounded bg-neutral-200 text-text-secondary text-xs font-medium">
                                            {label}
                                        </span>
                                    ))}
                                    <button className="flex items-center gap-1 text-xs text-text-muted hover:text-accent hover:underline px-1">
                                        <Tag size={12} /> Add
                                    </button>
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="pt-4 border-t border-border-light space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Created</label>
                                    <div className="text-sm text-text-muted">{modalData?.created || "Just now"}</div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Updated</label>
                                    <div className="text-sm text-text-muted">{modalData?.updated || "Just now"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Footer (Actions) --- */}
                <div className="p-4 border-t border-border-light bg-bg-tertiary flex justify-end gap-3">
                    <button 
                        onClick={closeModal}
                        className="px-4 py-2 text-sm font-medium text-text-primary hover:bg-bg-secondary rounded transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded shadow-sm transition-colors"
                    >
                        {modalData ? 'Save Changes' : 'Create Task'}
                    </button>
                </div>

            </div>
        </div>
    );
}