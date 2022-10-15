import React from 'react';

import { Route,Routes } from 'react-router-dom';

import Home from '../components/pages/Home.';
import Catalog from '../components/pages/Catalog';
import Detail from '../components/pages/Detail';


const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path='/:category/search/:keywork' 
             element={<Catalog/>}
      />

    <Route  path='/:category/:id' 
            element={<Detail/>}
        />

    <Route path='/:category' 
           element={<Catalog/>}
        />

    <Route  path='/' 
            exact
            element={<Home/>}
        />
    </Routes>
  );
}

export default ConfigRoutes;
