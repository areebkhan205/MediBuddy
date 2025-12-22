export function Button({ children, className, ...props }) {
    return (
      <button
        className={`bg-white text-black px-4 py-2 rounded ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  