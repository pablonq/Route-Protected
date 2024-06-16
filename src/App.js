import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Analitycs from "./pages/Analitycs";
import Navbar from "./components/Navbar";
import {ProtectedRoute} from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "Jhon",
      roles:['analize', "admin"]
    });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <BrowserRouter>
      <Navbar />
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<h1>Not Found</h1>} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        

        <Route path="/admin" element={
          <ProtectedRoute redirectTo = '/home' isAllowed={!!user && user.roles.includes("admin")}>
            <Admin />

          </ProtectedRoute>} />
        <Route path="/analytics" element={
          <ProtectedRoute redirectTo = '/home' isAllowed={!!user && user.roles.includes("analize")}>
            <Analitycs />

          </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
