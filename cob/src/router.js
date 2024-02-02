// src/router.js
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import Landing from "./pages/LandingPage";
import Simulation from "./pages/Simulation";
import Solution from "./pages/Solution";
import Feedback from "./pages/Feedback";


const router = (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<Landing />} />
    </Routes>
);

export default router;
