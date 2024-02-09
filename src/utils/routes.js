import env from 'react-dotenv';

const server = env.REACT_APP_SERVER;

const routes = {
  getWeather: () => `${server}/api/current`,
  getForecastWeather: () => `${server}/api/forecast`,
};

export default routes;
