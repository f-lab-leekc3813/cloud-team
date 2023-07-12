import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

import Header from './component/Header';
import HomePage from './pages/Home';
import NeighborhoodPage from './pages/Neighborhood';
import PartTimePage from './pages/PartTime';
import EstatePage from './pages/Estate';
import Mypage from './pages/Mypage';
import SignUp from './component/SignUp';


function App() {

  return (
    <RecoilRoot>
      <React.Fragment >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path = "/" element ={<HomePage />} />
            <Route path = "/estate" element ={<EstatePage />} />
            <Route path = "/neighborhood" element ={<NeighborhoodPage />} />
            <Route path = "/parttime" element ={<PartTimePage />} />
            <Route path = "/mypage" element ={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </RecoilRoot>
  );
}

export default App;
