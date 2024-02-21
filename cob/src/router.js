// src/router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import TopicSelect from "./pages/TopicSelect";
import Landing from "./pages/LandingPage";
import Simulation from "./pages/Simulation";
import Solution from "./pages/Solution";
import Feedback from "./pages/Feedback";
import Main from "./pages/MainPage";


const router = (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select-topic" element={<TopicSelect />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<Landing />} />
    </Routes>
);

export default router;
