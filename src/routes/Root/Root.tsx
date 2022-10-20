import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from 'pages/HomePage';
import DetailsPage from 'pages/DetailsPage';

const Root = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details-page" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
