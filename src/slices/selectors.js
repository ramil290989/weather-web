import { createSelector } from '@reduxjs/toolkit';

const selectAll = (state) => state.currentWeather.entities;

const selectSoonWeather = createSelector([selectAll], (entities) => {
  const soon = Object.values(entities);
  soon.shift();
  return soon;
});

export { selectSoonWeather, selectAll };
