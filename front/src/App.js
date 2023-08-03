import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

import Header from './component/Header';
import HomePage from './pages/Home';
import CategoriesPage from './pages/Categories';
import CategoriesDetailPage from './pages/CategoriesDetail';

function App() {

  return (
    <RecoilRoot>
      <React.Fragment >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path = "/" element ={<HomePage />} />
            <Route path = "/categories/:key" element ={<CategoriesPage />} />
            <Route path = "/categories/:detail" element ={<CategoriesDetailPage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </RecoilRoot>
  );
}

export default App;
