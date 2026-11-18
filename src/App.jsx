import { useState } from "react";
import { Calendar, ChartColumn, CircleCheck, FileText } from 'lucide-react';
import TopNav from "./components/layout/TopNav";
import PageHeader from "./components/layout/PageHeader";
import StatCard from "./features/stats/StatCard";
import "./App.css";

function App() {
  const [active, setActive] = useState("dashboard");

  <TopNav active={active} onNavigate={setActive} onAddJob={() => {}} />;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopNav
        active={active}
        onNavigate={setActive}
        onAddJob={() => console.log("Add Job clicked")}
      />
      <PageHeader title="Welcome back, Job Seeker! 👋" subtitle="Here's your job search overview" />
      
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:gap-8 lg:px-6 lg:py-12">
        {/* BAND 3: 2 columns on phones, 4 from 1024px */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          <StatCard label="Applications" value={3} icon={FileText} tone="blue" footnote="+100% this week" positive />
          <StatCard label="Interviews" value={2} icon={Calendar} tone="blue" footnote="1 upcoming" />
          <StatCard label="Offers" value={0} icon={CircleCheck} tone="green" />
          <StatCard label="Response Rate" value="100%" icon={ChartColumn} tone="purple" footnote="100% of 3 applications" />
        </div>
      </main>
    </div>
  );
}

export default App;
