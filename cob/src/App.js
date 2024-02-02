// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./components/navbar/navbar";
import router from "./router";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {router}
      </div>
    </Router>
  );
}

export default App;
