
import React from 'react';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

import Accueil from './pages/Accueil';
import Etudiants from './pages/Etudiants';
import Apropos from './pages/Apropos';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>     
          <Route exact path="/" element={<Accueil/>} />
          <Route exact path="accueil" element={<Accueil/>} />
          <Route exact path="etudiants" element={<Etudiants/>} />
          <Route exact path="apropos" element={<Apropos/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
