const server = process.env.SERVER_PATH || 'http://192.168.1.35:3001';

const routes = {
  getWeather: () => `${server}/api/current`,
};

export default routes;
