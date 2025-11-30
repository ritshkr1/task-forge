import { useEffect } from "react";

function Modal({
    open,
    title = "Task Forge",
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

// Modal.prototype = {
//     open: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//     primaryText: PropTypes.string,
//     secondaryText: PropTypes.string,
//     onPrimary: PropTypes.func,
//     onSecondary: PropTypes.func,
//     children: PropTypes.node,
// }

export default Modal;