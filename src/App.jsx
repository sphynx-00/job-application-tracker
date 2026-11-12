
import TopNav from './components/layout/TopNav';
import './App.css'
import { useState } from 'react';

function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopNav
        active={active}
        onNavigate={setActive}
        onAddJob={() => console.log("Add Job clicked")}
      />
    </div>
  );
}

export default App
