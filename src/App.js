import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";


const WelcomePage = React.lazy(() => import("./components/Welcome"));
const DashboardPage = React.lazy(() =>
  import("./components/Dashboard/Dashboard")
);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
