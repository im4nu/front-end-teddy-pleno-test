import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const WelcomeApp = React.lazy(() => import("welcome/WelcomeApp"));
// const ClientsApp = React.lazy(() => import("clients/ClientsApp"));
// const SelectedApp = React.lazy(
//   () => import("selectedClients/SelectedClientsApp")
// );

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          {/* <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/selected">Selected Clients</Link>
          </li> */}
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomeApp />} />
          {/* <Route path="/clients" element={<ClientsApp />} />
          <Route path="/selected-clients" element={<SelectedApp />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
