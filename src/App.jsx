import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentWeatherPage from './pages/CurrentWeatherPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CurrentWeatherPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
