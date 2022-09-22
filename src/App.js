import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const WelcomePage = React.lazy(() => import("./components/Welcome"));
const DashboardPage = React.lazy(() =>
  import("./components/Dashboard/Dashboard")
);
const CartypesPage = React.lazy(() =>
  import("./components/Dashboard/Cartypes")
);
const ChargesPage = React.lazy(() => import("./components/Dashboard/Charges"));
const VehiclePage = React.lazy(() =>
  import("./components/Dashboard/VehiclesList")
);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cartypes" element={<CartypesPage />} />
        <Route path="/charges" element={<ChargesPage />} />
        <Route path="/vehicles" element={<VehiclePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
