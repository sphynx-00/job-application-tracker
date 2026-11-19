import { useEffect, useState } from "react";
import TopNav from "./components/layout/TopNav";
import AddJobForm from "./features/applications/AddJobForm";
import DashboardPage from "./pages/DashboardPage";
import { sampleApplications, sampleInterviews } from "./data/sampleData";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [applications, setApplications] = useState(sampleApplications);
  const [interviews] = useState(sampleInterviews);
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSaveJob(job) {
    setApplications((current) => [job, ...current]);
    setShowForm(false);
    setNotice(`Added ${job.title} at ${job.company}`);
  }

  // Hide the confirmation message after 3 seconds.
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3000);
    return () => clearTimeout(timer);
  }, [notice]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopNav
        active={active}
        onNavigate={setActive}
        onAddJob={() => setShowForm((open) => !open)}
        addOpen={showForm}
      />

      {showForm && <AddJobForm onSave={handleSaveJob} onCancel={() => setShowForm(false)} />}

      <DashboardPage applications={applications} interviews={interviews} />

      {notice && (
        <div
          role="status"
          className="fixed bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl bg-gray-900 px-4 py-3 text-center text-sm text-white shadow-lg"
        >
          {notice}
        </div>
      )}
    </div>
  );
}