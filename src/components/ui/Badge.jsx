export default function Badge({ children }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 lg:px-3 lg:py-1 lg:text-sm">
      {children}
    </span>
  );
}