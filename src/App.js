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
import Label from "./Pages/Projects/Label";
import MapSocial from "./Pages/Projects/MapSocial";
import Departments from "./Pages/Departments/Departments";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

  const router = createHashRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/Label" element={<Projects proName="label"/>} />
        <Route path="/projects/MapSocial" element={<Projects proName="mapSocial"/>} />
        <Route path="/projects/GoalTritons" element={<Projects proName="GoalTritons"/>} />
        <Route path="/departments" element={<Departments />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
