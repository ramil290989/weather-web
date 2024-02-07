import { createSelector } from '@reduxjs/toolkit';

const selectAll = (state) => state.currentWeather.entities;

const selectSoonWeather = createSelector([selectAll], (entities) => {
  const soon = Object.values(entities);
  soon.shift();
  return soon;
});

const selectNowWeather = createSelector([selectAll], (entities) => {
  const data = Object.values(entities);
  const now = data.shift();
  return now;
});

export { selectSoonWeather, selectNowWeather, selectAll };
