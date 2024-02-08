import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentWeatherPage from './pages/CurrentWeatherPage.jsx';
import ForecastWeatherPage from './pages/ForecastWeatherPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CurrentWeatherPage />} />
      <Route path="/forecast" element={<ForecastWeatherPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
