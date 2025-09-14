import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const WelcomeApp = React.lazy(() => import("welcome/WelcomeApp"));
const ClientsApp = React.lazy(() => import("clients/ClientsApp"));
const SelectedApp = React.lazy(
  () => import("selectedClients/SelectedClientsApp")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<WelcomeApp />} />
        <Route path="/clients" element={<ClientsApp />} />
        <Route path="/selected-clients" element={<SelectedApp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
