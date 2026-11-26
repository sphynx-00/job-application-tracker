import { useEffect, useState } from "react";
import TopNav from "./components/layout/TopNav";
import AddJobForm from "./features/applications/AddJobForm";
import ApplicationsPage from "./pages/ApplicationsPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import { sampleApplications, sampleInterviews } from "./data/sampleData";
import useTheme from "./hooks/useTheme";
import { Routes, Route } from "react-router";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [applications, setApplications] = useState(sampleApplications);
  const [interviews] = useState(sampleInterviews);
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");
  const [savedJobIds, setSavedJobIds] = useState([]);

  function handleSaveJob(job) {
    setApplications((current) => [job, ...current]);
    setShowForm(false);
    setNotice(`Added ${job.title} at ${job.company}`);
  }

  // Bookmark a job from the search page, or remove the bookmark.
  function toggleSavedJob(id) {
    setSavedJobIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  }

  // "Apply" on the search page adds the job to My Applications.
  function handleApply(job) {
    setApplications((current) => [
      {
        id: String(Date.now()),
        title: job.title,
        company: job.company,
        status: "applied",
        appliedAt: new Date(),
        salaryMin: job.salaryMin,
        salaryMax: job.salaryMax,
      },
      ...current,
    ]);
    setNotice(`Applied to ${job.title} at ${job.company}`);
  }

  // Hide the confirmation message after 3 seconds.
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3000);
    return () => clearTimeout(timer);
  }, [notice]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <TopNav
        onAddJob={() => setShowForm((open) => !open)}
        addOpen={showForm}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {showForm && (
        <AddJobForm
          onSave={handleSaveJob}
          onCancel={() => setShowForm(false)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              applications={applications}
              interviews={interviews}
            />
          }
        />
        <Route
          path="/applications"
          element={<ApplicationsPage applications={applications} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
              applications={applications}
              savedIds={savedJobIds}
              onToggleSave={toggleSavedJob}
              onApply={handleApply}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {notice && (
        <div
          role="status"
          className="fixed bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl bg-gray-900 px-4 py-3 text-center text-sm text-white shadow-lg dark:bg-gray-100 dark:text-gray-900"
        >
          {notice}
        </div>
      )}
    </div>
  );
}
