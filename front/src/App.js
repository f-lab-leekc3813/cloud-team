import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Header from './component/Header';
import HomePage from './pages/Home';

function App() {

  return (
    <RecoilRoot>
      <React.Fragment >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path = "/" element ={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </RecoilRoot>
  );
}

export default App;
