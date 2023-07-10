import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import HomePage from './pages/Home';
import NeighborhoodPage from './pages/Neighborhood';
import PartTimePage from './pages/PartTime';
import EstatePage from './pages/Estate';

function App() {
  return (
    <React.Fragment >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element ={<HomePage />} />
          <Route path = "/estate" element ={<EstatePage />} />
          <Route path = "/neighborhood" element ={<NeighborhoodPage />} />
          <Route path = "/parttime" element ={<PartTimePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
