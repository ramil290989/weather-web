import getTimesOfDay from './getTimesOfDay.js';
import windDirection from './windDirection.js';

const normalizeCurrentData = (inputData) => {
  const outputData = inputData.map((data, index) => {
    const normalizedData = {};
    normalizedData.datedescription = index === 0 ? 'сейчас' : getTimesOfDay(data.date.local);
    normalizedData.datelocal = data.date.local;
    normalizedData.tempreal = data.temperature.air.C;
    normalizedData.tempfeel = data.temperature.comfort.C;
    normalizedData.icon = data.icon;
    normalizedData.description = data.description.full;
    normalizedData.windspeed = data.wind.speed.m_s;
    normalizedData.winddirection = windDirection[data.wind.direction.scale_8];
    normalizedData.humidity = data.humidity.percent;
    normalizedData.pressure = data.pressure.mm_hg_atm;
    normalizedData.id = data.id;
    return normalizedData;
  });
  return outputData;
};

export default normalizeCurrentData;
