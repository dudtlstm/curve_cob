// src/router.js
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Loading from "./components/loading/loading";
import Simulation from "./pages/Simulation";
import EmergencySolution from "./pages/EmergencySolutions";

const LazyLandingPage = lazy(() => import("./pages/LandingPage"));

const router = (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/emergency-solution" element={<EmergencySolution />} />
        <Route path="about" element={
        <Suspense fallback={<Loading />}>
            <LazyLandingPage />
        </Suspense>
        } />
    </Routes>
);

export default router;
