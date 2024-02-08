import windDirection from './windDirection.js';

const normalizeForecastData = (data) => {
  const indexToIdStep = 1;
  const avg = 2;
  const normalizedData = data.map((item, index) => {
    const id = `forecast${index + indexToIdStep}`;
    const date = item.date.local;
    const description = item.description.full;
    const humidity = item.humidity.percent.avg;
    const pressure = (item.pressure.mm_hg_atm.min + item.pressure.mm_hg_atm.min) / avg;
    const { icon } = item;
    const tempReal = {};
    const tempFeel = {};
    const direction = {};
    const speed = {};
    tempReal.min = item.temperature.air.min.C;
    tempReal.max = item.temperature.air.max.C;
    tempReal.avg = item.temperature.air.avg.C;
    tempFeel.min = item.temperature.comfort.min.C;
    tempFeel.max = item.temperature.comfort.max.C;
    direction.min = windDirection[item.wind.direction.min.scale_8];
    direction.max = windDirection[item.wind.direction.max.scale_8];
    speed.min = item.wind.speed.min.m_s;
    speed.max = item.wind.speed.max.m_s;
    return {
      id,
      date,
      description,
      humidity,
      pressure,
      icon,
      tempReal,
      tempFeel,
      wind: { direction, speed },
    };
  });
  return normalizedData;
};

export default normalizeForecastData;
