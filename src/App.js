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

function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <div style={{paddingBottom: '4rem'}}>
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
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/Label" element={<Projects proName="Label"/>} />
        <Route path="/projects/MapSocial" element={<Projects proName="MapSocial"/>} />
        <Route path="/projects/GoalTritons" element={<Projects proName="GoalTritons"/>} />
        <Route path="/projects/WeRide" element={<Projects proName="WeRide"/>} />
        <Route path="/projects/Defit" element={<Projects proName="Defit"/>} />
        <Route path="/projects/HousingDashboard" element={<Projects proName="HousingDashboard"/>} />
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
