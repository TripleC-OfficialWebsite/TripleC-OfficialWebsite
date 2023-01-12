import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Projects from "./Pages/Projects/Projects";
import Departments from "./Pages/Departments/Departments";
import Navbar from "./Navbar";

function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/departments" element={<Departments />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
