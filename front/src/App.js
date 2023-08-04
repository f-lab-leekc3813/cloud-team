import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

import Header from './component/Header';
import HomePage from './pages/Home';
import CategoriesPage from './pages/Categories';
import CategoriesDetailPage from './pages/CategoriesDetail';
import SearchPage from './pages/Search';


function App() {
  return (
    <RecoilRoot>
      <React.Fragment >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path = "/" element ={<HomePage />} />
            <Route path = "/categories/:key" element ={<CategoriesPage />} />
            <Route path = "/categories/:key/detail/:title" element ={<CategoriesDetailPage />} />
            <Route path = "/search/:key" element ={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </RecoilRoot>
  );
}

export default App;
