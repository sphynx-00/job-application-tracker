export default function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:px-5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
