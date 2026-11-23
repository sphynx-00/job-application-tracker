import { useState } from "react";
import Button from "../../components/ui/Button";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base focus-visible:outline-2 focus-visible:outline-blue-600";

// The panel that drops down under the nav when you press "Add Job".
// It keeps what you typed in `values` and calls onSave with a new application.
export default function AddJobForm({ onSave, onCancel }) {
  const [values, setValues] = useState({
    title: "",
    company: "",
    salaryMin: "",
    salaryMax: "",
  });
  const [error, setError] = useState("");

  function update(field) {
    return (event) => {
      setValues({ ...values, [field]: event.target.value });
      setError(""); // clear the error as soon as the user edits anything
    };
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page

    const salaryMin = values.salaryMin ? Number(values.salaryMin) : undefined;
    const salaryMax = values.salaryMax ? Number(values.salaryMax) : undefined;

    if (salaryMin != null && salaryMax != null && salaryMin > salaryMax) {
      setError("Salary from can't be higher than salary to.");
      return;
    }

    onSave({
      id: String(Date.now()),
      title: values.title.trim(),
      company: values.company.trim(),
      status: "applied",
      appliedAt: new Date(),
      salaryMin,
      salaryMax,
    });
  }

  return (
    <div
      id="add-job-form"
      className="border-t dark:border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
    >
      <form
        onSubmit={handleSubmit}
        onKeyDown={(event) => event.key === "Escape" && onCancel()}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 sm:gap-4 sm:px-6 md:gap-4 md:px-6 md:gap-4 md:px-6 lg:grid-cols-12 lg:items-end lg:py-5"
      >
        <label className="col-span-2 grid gap-1.5 text-sm text-gray-600 dark:text-gray-400 md:col-span-1 lg:col-span-3">
          Job title
          <input
            className={inputClass}
            required
            autoFocus
            value={values.title}
            onChange={update("title")}
            placeholder="Staff Engineer"
          />
        </label>

        <label className="col-span-2 grid gap-1.5 text-sm text-gray-600 dark:text-gray-400 md:col-span-1 lg:col-span-3">
          Company
          <input
            className={inputClass}
            required
            value={values.company}
            onChange={update("company")}
            placeholder="Monzo"
          />
        </label>

        <label className="grid gap-1.5 text-sm text-gray-600 dark:text-gray-400 lg:col-span-2">
          Salary from (£)
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            min="0"
            step="1000"
            value={values.salaryMin}
            onChange={update("salaryMin")}
            placeholder="60000"
          />
        </label>

        <label className="grid gap-1.5 text-sm text-gray-600 dark:text-gray-400 lg:col-span-2">
          Salary to (£)
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            min="0"
            step="1000"
            value={values.salaryMax}
            onChange={update("salaryMax")}
            placeholder="75000"
          />
        </label>

        <div className="col-span-2 flex items-center gap-2 lg:col-span-2">
          <Button type="submit" className="whitespace-nowrap">
            Save job
          </Button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl px-4 py-2.5 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
        </div>

        {error && (
          <p
            role="alert"
            className="col-span-2 text-sm text-red-600 dark:text-red-400 lg:col-span-12"
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
