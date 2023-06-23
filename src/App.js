import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
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
import Footer from "./Footer";
import ProJson from "./Content/projects.json";

function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <div style={{ marginBottom: "5rem", marginTop: "3.5rem" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );

  const router = createHashRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/projects" element={<Projects />} />
        {Object.keys(ProJson).map((key,index) => {
          return (<Route path={`/projects/${key}`} element={<Projects proName={key} />} />);
        })}
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
