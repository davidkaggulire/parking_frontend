import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { loginActions } from "./store/loginSlice";
import { getVehicleHandler } from "./store/vehicle-actions";
import { calculateRemainingTime } from "./utils/retrieveToken";

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

const VehicleDetails = React.lazy(() =>
  import("./components/Dashboard/VehicleDetails")
);

const ClinicPage = React.lazy(() =>
  import("./components/pages/ClinicListPage")
);

const NotFound = React.lazy(() =>
  import("./components/NotFound")
);
let logoutTimer;

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();

  const expirationTime = useSelector((state) => state.login.expirationTime);
  const dispatch = useDispatch();

  const logoutHandler = useCallback(() => {
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const remainingTime = calculateRemainingTime(expirationTime);
      dispatch(
        loginActions.expire({
          remainingTime: remainingTime,
        })
      );
      console.log(remainingTime);
      logoutTimer = setTimeout(logoutHandler, remainingTime);
      if (remainingTime < 0) {
        navigate("../", { replace: true });
      }
    }
  }, [logoutHandler, isLoggedIn, expirationTime, dispatch, navigate])

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {isLoggedIn && <Route path="/dashboard" element={<DashboardPage />} />}
        {isLoggedIn && <Route path="/cartypes" element={<CartypesPage />} />}
        {isLoggedIn && <Route path="/charges" element={<ChargesPage />} />}
        {isLoggedIn && <Route path="/vehicles" element={<VehiclePage />} />}
        {isLoggedIn && <Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />}
        {isLoggedIn && <Route path="/clinic" element={<ClinicPage />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
