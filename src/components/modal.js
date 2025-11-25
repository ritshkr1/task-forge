import { useEffect } from "react";

// interface ModalProps {
//   open: boolean;
//   title?: string;
//   onClose: () => void;
//   primaryText?: string;
//   secondaryText?: string;
//   onPrimary?: () => void;
//   onSecondary?: () => void;
//   children: React.ReactNode;
// }

export default function Modal({
  open,
  title = "Modal Title",
  onClose,
  primaryText = "Submit",
  secondaryText = "Cancel",
  onPrimary,
  onSecondary,
  children,
}) {
  // Escape key to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        console.log("Escape pressed");
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <p id="modal-title">{title}</p>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        {/* built-in form wrapper */}
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            onPrimary?.();
          }}
        >
          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <button type="submit" className="btn-primary">
              {primaryText}
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={onSecondary ?? onClose}
            >
              {secondaryText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
