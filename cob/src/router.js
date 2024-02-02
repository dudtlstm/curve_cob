// src/router.js
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Loading from "./components/loading/loading";

const LazyLandingPage = lazy(() => import("./pages/LandingPage"));

const router = (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={
        <Suspense fallback={<Loading />}>
            <LazyLandingPage />
        </Suspense>
        } />
    </Routes>
);

export default router;
