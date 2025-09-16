import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "ui/Sidebar";
import Header from "ui/Header";

const WelcomeApp = React.lazy(() => import("welcome/WelcomeApp"));
const ClientsApp = React.lazy(() => import("clients/ClientsApp"));
const SelectedApp = React.lazy(
  () => import("selectedClients/SelectedClientsApp")
);

function App() {
  const location = useLocation();
  const showSidebarAndHeader = location.pathname !== "/";
  return (
    <div className="flex min-h-screen bg-gray-50">
      {showSidebarAndHeader && <Sidebar />}
      <div className="flex-1 flex flex-col min-h-screen">
        {showSidebarAndHeader && <Header />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<WelcomeApp />} />
            <Route path="/clients" element={<ClientsApp />} />
            <Route path="/selected-clients" element={<SelectedApp />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
