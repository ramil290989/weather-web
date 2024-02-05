import getTimesOfDay from './getTimesOfDay.js';
import windDirection from './windDirection.js';

const normalizeCurrentData = (inputData) => {
  const outputData = inputData.map((data, index) => {
    const normalizedData = {};
    normalizedData.dateDescription = index === 0 ? 'сейчас' : getTimesOfDay(data.date.local);
    normalizedData.dateLocal = data.date.local;
    normalizedData.tempReal = data.temperature.air.C;
    normalizedData.tempFeel = data.temperature.comfort.C;
    normalizedData.icon = data.icon;
    normalizedData.weatherDescription = data.description.full;
    normalizedData.windSpeed = data.wind.speed.m_s;
    normalizedData.windDirection = windDirection[data.wind.direction.scale_8];
    normalizedData.humidity = data.humidity.percent;
    normalizedData.pressure = data.pressure.mm_hg_atm;
    normalizedData.id = data.id;
    return normalizedData;
  });
  return outputData;
};

export default normalizeCurrentData;
