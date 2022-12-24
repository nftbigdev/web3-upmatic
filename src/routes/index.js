import React from 'react'
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Articles from '../pages/Articles';
import Dashboard from '../pages/Dashboard';
import Faq from '../pages/Faq';
import HomePage from '../pages/HomePage';
import Roadmap from '../pages/Roadmap';
import Staking from '../pages/Staking';
import Swap from '../pages/Swap';

const AppRoutes = () => {
  return (
    <>
      {/* <DAppProvider config={{}}> */}
      <Routes>
        {/* {window.location.host.split('.')[0] === 'app' ? (
          <Route path='/' element={<AppPage />} />
        ) : (
          <Route path='/' element={<HomePage />} />
        )} */}
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/staking' element={<Staking />} />
        <Route path='/swap' element={<Swap />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/roadmap' element={<Roadmap />} />
      </Routes>
     
    </>
  );
};

export default AppRoutes;
