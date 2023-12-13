import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Dashboard, Asset, Login, Register } from "./pages";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./components/layout/DashboardLayout";
import RequireAuth from "./utils/RequireAuth";

axios.defaults.baseURL = "http://localhost:8081/api/v1";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/asset" element={<Asset />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
