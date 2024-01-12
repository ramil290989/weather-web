import React from 'react';
import Header from './components/Header.jsx';
import WeatherToday from './components/WeatherToday.jsx';

function App() {
  return (
    <div className='container border-2'>
      <Header />
      <WeatherToday />
    </div>
  );
}

export default App;
