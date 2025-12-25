import React, { useState, useEffect } from "react";
import { useCustomGlobalModal } from "./ModalContext";
import { useTasks } from "../components/TaskListContext";
import {
  X,
  Calendar,
  User,
  Tag,
  Flag,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronDown,
  Paperclip,
  MessageSquare,
} from "lucide-react";

export const CommonTaskModal = () => {
  const { isOpen, modalData, closeModal } = useCustomGlobalModal();
  const [isStatusOpen, setIsStatusOpen] = useState(false); // Add this
  const statusOptions = ["TODO", "IN PROGRESS", "DONE"];
  const {saveTask} = useTasks();
  const [isAddingLabel, setIsAddingLabel] = useState(false);
const [newLabelText, setNewLabelText] = useState("");
const [newComment, setNewComment] = useState("")

const handleAddLabel = () => {
    const trimmedLabel = newLabelText.trim();
    // Only add if it has text and isn't a duplicate
    if (trimmedLabel && !formData.labels.includes(trimmedLabel)) {
        setFormData({ ...formData, labels: [...formData.labels, trimmedLabel] });
    }
    // Reset state
    setNewLabelText("");
    setIsAddingLabel(false);
};

const handleRemoveLabel = (labelToRemove) => {
    setFormData({
        ...formData,
        labels: formData.labels.filter(l => l !== labelToRemove)
    });
};

  // Local state to handle form inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "TODO",
    priority: "medium",
    assignee: null,
    labels: [],
    dueDate: "",
    commentsList: [], // Added commentsList to state
  });

  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const priorityOptions = ["lowest", "low", "medium", "high", "highest"];

  // Helper to color the flag icon based on priority
  const getPriorityColor = (p) => {
    switch (p) {
      case "highest":
        return "text-red-500";
      case "high":
        return "text-red-400";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-blue-500";
      case "lowest":
        return "text-slate-400";
      default:
        return "text-gray-400";
    }
  };
  // Populate state when modal opens
  useEffect(() => {
    if (isOpen && modalData) {
      console.log(modalData)
      setFormData({
        id:modalData.id,
        title: modalData.title || "",
        description: modalData.description || "",
        status: modalData.status || "TODO",
        priority: modalData.priority || "medium",
        assignee: modalData.assignee || null,
        labels: modalData.labels || [],
        dueDate: modalData.dueDate || "",
        comments: modalData.comments || 0,
        // Ensure we fallback to empty array if no list exists
        commentsList: modalData.commentsList || [],
      });
    } else if (isOpen && !modalData) {
      // Reset for "Create New"
      setFormData({
        title: "",
        description: "",
        status: "TODO",
        priority: "medium",
        assignee: null,
        labels: [],
        dueDate: "",
        comments:0,
        commentsList: [],
      });
    }
  }, [isOpen, modalData]);


  if (!isOpen) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "DONE":
        return "bg-success-bg text-success-text";
      case "IN PROGRESS":
        return "bg-info-bg text-info-text";
      default:
        return "bg-todo-bg text-todo-text";
    }
  };
  function handleAddComments(){
    setFormData((curr) => {
      console.log({...curr, comments: curr.comments +1, commentsList:[...curr.commentsList, newComment]});
      const comment = {
        id: `c-${Date.now()}`,
        author: { "name": "Ritesh Kumar", "avatar": "RK" },
        text: newComment,
        created: new Date().toLocaleDateString(),
      }
      return curr = {...curr, comments: curr.comments +1, commentsList:[...curr.commentsList, comment]}});
    setNewComment((currComment) => currComment = '');
  }

  function handleSubmit(){
   saveTask(formData);
   closeModal();

  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-card-bg rounded-lg shadow-2xl overflow-hidden border border-border-main animate-in fade-in zoom-in-95 duration-200">
        {/* --- Header --- */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-bg-tertiary">
          <div className="flex items-center gap-3">
            {modalData?.id ? (
              <span className="text-sm font-medium text-text-secondary hover:underline cursor-pointer">
                TASK-{modalData.id}
              </span>
            ) : (
              <span className="text-sm font-medium text-text-secondary">
                New Issue
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={closeModal}
              className="p-2 rounded hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* --- Body (Scrollable) --- */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col md:flex-row">
            {/* LEFT COLUMN: Main Content */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar border-r border-border-light">
              {/* Title Input */}
              <div className="mb-6">
                <label className="sr-only">Task Title</label>
                <input
                  type="text"
                  placeholder="Issue Summary"
                  className="w-full text-2xl font-semibold bg-transparent border-none focus:ring-2 focus:ring-accent rounded px-2 py-1 -ml-2 text-text-primary placeholder:text-text-muted"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Description
                </label>
                <textarea
                  className="w-full min-h-[150px] p-4 bg-bg-secondary rounded-md border border-border-light focus:border-accent focus:ring-1 focus:ring-accent text-text-primary resize-y placeholder:text-text-muted transition-all"
                  placeholder="Add a description..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              {/* Activity / Comments Section */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                  Activity{" "}
                  <span className="text-text-muted font-normal text-xs">
                    ({formData.commentsList.length})
                  </span>
                </h3>

                <div className="space-y-6">
                  {/* 1. Map existing comments */}
                  {formData.commentsList.map((comment) => (
                    <div key={comment.id} className="flex gap-4 group">
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ring-2 ring-transparent group-hover:ring-offset-1 group-hover:ring-indigo-300 transition-all">
                        {comment.author.avatar}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-sm font-semibold text-text-primary">
                            {comment.author.name}
                          </span>
                          <span className="text-xs text-text-muted">
                            {comment.created}
                          </span>
                        </div>
                        <div className="text-sm text-text-secondary leading-relaxed">
                          {comment.text}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* 2. Add New Comment Input */}
                  <div className="flex gap-4 pt-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      RK
                    </div>
                    <div className="flex-1">
                      <div className="border border-border-light rounded-md bg-white dark:bg-bg-secondary overflow-hidden focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all shadow-sm">
                        <textarea
                          className="w-full p-3 bg-transparent border-none focus:ring-0 text-sm text-text-primary min-h-[60px] resize-none placeholder:text-text-muted"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        />
                        <div className="bg-bg-tertiary px-3 py-2 flex justify-between items-center border-t border-border-light">
                          <div className="text-xs text-text-muted font-medium">
                            Pro tip: press enter to comment.
                          </div>
                          <button onClick={handleAddComments} className="px-3 py-1.5 text-xs font-medium text-white bg-accent hover:bg-accent-dark rounded transition-colors">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Metadata (Sidebar) */}
            <div className="w-full md:w-80 bg-bg-primary/30 p-6 overflow-y-auto custom-scrollbar space-y-6">
              {/* Status Dropdown Wrapper */}
              <div className="relative">
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">
                  Status
                </label>

                {/* Trigger Button */}
                <button
                  onClick={() => setIsStatusOpen(!isStatusOpen)}
                  className={`flex items-center justify-between w-full gap-2 px-3 py-1.5 rounded text-sm font-semibold uppercase tracking-wide transition-all border border-transparent hover:border-border-main ${getStatusColor(
                    formData.status
                  )}`}
                >
                  <span>{formData.status.replace("_", " ")}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isStatusOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isStatusOpen && (
                  <>
                    {/* Invisible Backdrop (Closes menu when clicking outside) */}
                    <div
                      className="fixed inset-0 z-10 cursor-default"
                      onClick={() => setIsStatusOpen(false)}
                    ></div>

                    {/* Menu List */}
                    <div className="absolute top-full left-0 mt-2 w-full bg-card-bg border border-border-light rounded-md shadow-lg z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                      {statusOptions.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            setFormData({ ...formData, status: option });
                            setIsStatusOpen(false);
                          }}
                          className="px-3 py-2 text-sm font-medium cursor-pointer hover:bg-bg-secondary flex items-center gap-2 group"
                        >
                          {/* Option Color Indicator */}
                          <div
                            className={`w-2 h-2 rounded-full ${
                              option === "DONE"
                                ? "bg-green-500"
                                : option === "IN_PROGRESS"
                                ? "bg-blue-500"
                                : "bg-gray-400"
                            }`}
                          ></div>

                          <span
                            className={`uppercase ${
                              formData.status === option
                                ? "text-text-primary"
                                : "text-text-secondary group-hover:text-text-primary"
                            }`}
                          >
                            {option.replace("_", " ")}
                          </span>

                          {/* Selected Checkmark */}
                          {formData.status === option && (
                            <div className="ml-auto text-accent">
                              <CheckCircle size={14} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Assignee */}
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">
                  Assignee
                </label>
                <div className="flex items-center gap-3 p-2 rounded hover:bg-bg-secondary cursor-pointer transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs ring-2 ring-transparent group-hover:ring-accent">
                    {formData.assignee ? (
                      formData.assignee.avatar
                    ) : (
                      <User size={16} />
                    )}
                  </div>
                  <span className="text-sm text-text-primary">
                    {formData.assignee ? formData.assignee.name : "Unassigned"}
                  </span>
                </div>
              </div>

              {/* Priority Dropdown Wrapper */}
              <div className="relative z-10">
                {" "}
                {/* z-10 ensures it sits above other lists if they overlap */}
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">
                  Priority
                </label>
                {/* Trigger Button */}
                <button
                  onClick={() => setIsPriorityOpen(!isPriorityOpen)}
                  className="flex items-center justify-between w-full gap-2 px-3 py-2 rounded text-sm text-text-primary hover:bg-bg-secondary border border-transparent hover:border-border-light transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Flag
                      size={16}
                      className={`fill-current ${getPriorityColor(
                        formData.priority
                      )}`}
                    />
                    <span className="capitalize font-medium">
                      {formData.priority}
                    </span>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-text-secondary transition-transform duration-200 ${
                      isPriorityOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown Menu */}
                {isPriorityOpen && (
                  <>
                    {/* Invisible Backdrop */}
                    <div
                      className="fixed inset-0 z-10 cursor-default"
                      onClick={() => setIsPriorityOpen(false)}
                    ></div>

                    {/* Menu List */}
                    <div className="absolute top-full left-0 mt-2 w-full bg-card-bg border border-border-light rounded-md shadow-lg z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                      {priorityOptions.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            setFormData({ ...formData, priority: option });
                            setIsPriorityOpen(false);
                          }}
                          className="px-3 py-2 text-sm cursor-pointer hover:bg-bg-secondary flex items-center gap-2 group"
                        >
                          {/* Option Icon */}
                          <Flag
                            size={14}
                            className={`fill-current ${getPriorityColor(
                              option
                            )}`}
                          />

                          <span
                            className={`capitalize ${
                              formData.priority === option
                                ? "text-text-primary font-medium"
                                : "text-text-secondary group-hover:text-text-primary"
                            }`}
                          >
                            {option}
                          </span>

                          {/* Selected Checkmark */}
                          {formData.priority === option && (
                            <div className="ml-auto text-accent">
                              <CheckCircle size={14} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Labels Section */}
<div>
    <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Labels</label>
    
    <div className="flex flex-wrap gap-2">
        {/* 1. Render Existing Labels */}
        {formData.labels.map((label, idx) => (
            <div 
                key={idx} 
                className="group flex items-center gap-1 px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-text-secondary text-xs font-medium transition-colors border border-transparent"
            >
                <span>{label}</span>
                <button 
                    onClick={() => handleRemoveLabel(label)}
                    className="text-text-muted hover:text-error-text transition-colors opacity-0 group-hover:opacity-100"
                >
                    <X size={12} />
                </button>
            </div>
        ))}

        {/* 2. Toggle between "Add" Button and Input */}
        {isAddingLabel ? (
            <input
                autoFocus
                type="text"
                className="w-24 px-2 py-1 text-xs bg-bg-secondary border border-accent rounded outline-none text-text-primary placeholder:text-text-muted"
                placeholder="Type label..."
                value={newLabelText}
                onChange={(e) => setNewLabelText(e.target.value)}
                onBlur={handleAddLabel} // Save when clicking away
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddLabel();
                    if (e.key === 'Escape') setIsAddingLabel(false);
                }}
            />
        ) : (
            <button 
                onClick={() => setIsAddingLabel(true)}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-bg-secondary text-xs text-text-muted hover:text-accent transition-colors"
            >
                <Tag size={12} /> 
                <span>Add</span>
            </button>
        )}
    </div>
</div>

              {/* Dates */}
              <div className="pt-4 border-t border-border-light space-y-4">
                <div>
                  <label className="block text-xs font-bold text-text-secondary uppercase mb-2">
                    Created
                  </label>
                  <div className="text-sm text-text-muted">
                    {modalData?.created || "Just now"}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-secondary uppercase mb-2">
                    Updated
                  </label>
                  <div className="text-sm text-text-muted">
                    {modalData?.updated || "Just now"}
                  </div>
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
          <button onClick={handleSubmit} className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded shadow-sm transition-colors">
            {modalData ? "Save Changes" : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
};
