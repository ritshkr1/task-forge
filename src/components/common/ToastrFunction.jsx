import toast from "react-hot-toast";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

// Helper component to render the custom UI
const CustomToastUI = ({ t, title, message, type }) => {
  const config = {
    success: {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      // borderColor: "green-500",
      btnHover: "hover:text-green-600",
      className: `${
        t.visible ? "animate-enter opacity-100 translate-y-0" : "animate-leave opacity-0 -translate-y-2 "  
      }  w-[250px] bg-bg-primary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-green-500 ring-opacity-5 transition-all duration-300`
    },
    error: {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      // borderColor: "red-500",
      btnHover: "hover:text-red-600",
      className: `${
        t.visible ? "animate-enter opacity-100 translate-y-0" : "animate-leave opacity-0 -translate-y-2 "  
      }  w-[250px] bg-bg-primary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-500 ring-opacity-5 transition-all duration-300`
    },
    loading: {
      // Loader2 is best for spinning because it's centered properly
      icon: <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />,
      // borderColor: "blue-500",
      btnHover: "hover:text-blue-600",
      className: `${
        t.visible ? "animate-enter opacity-100 translate-y-0" : "animate-leave opacity-0 -translate-y-2 "  
      }  w-[250px] bg-bg-primary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-blue-500 ring-opacity-5 transition-all duration-300`
    },
  };

  const style = config[type];

  return (
    <div
      className={style.className}
    >
      {/* Icon & Text Section */}
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">{style.icon}</div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-text-primary">{title}</p>
            <p className="mt-1 text-sm text-text-primary">{message}</p>
          </div>
        </div>
      </div>

      {/* Border Separator & Close Button */}
      {/* <div className={`flex border-l border-gray-200 dark:border-gray-700 ${style.borderColor}`}>
        <button
          onClick={() => toast.dismiss(t.id)}
          className={`w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 dark:text-gray-300 ${style.btnHover} focus:outline-none`}
        >
          Close
        </button>
      </div> */}
    </div>
  );
};

export const ToastrMessage = {
  success: (message) =>
    toast.custom((t) => <CustomToastUI t={t} type="success" title="Success" message={message} />),

  error: (message) =>
    toast.custom((t) => <CustomToastUI t={t} type="error" title="Error" message={message} />),

  loading: (message) =>
    toast.custom((t) => <CustomToastUI t={t} type="loading" title="Processing" message={message} />),
    
  dismiss: (id) => toast.dismiss(id),
};