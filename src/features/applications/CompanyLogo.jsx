export default function CompanyLogo({ name }) {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-sm font-medium text-white lg:size-11">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}