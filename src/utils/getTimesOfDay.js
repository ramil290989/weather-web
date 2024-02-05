const getTimesOfDay = (data) => {
  const days = {
    today: 'Сегодня',
    tomorrow: 'Завтра',
  };
  const tods = {
    night: {
      name: 'ночью',
      start: 0,
      end: 6,
    },
    morning: {
      name: 'утром',
      start: 6,
      end: 12,
    },
    day: {
      name: 'днем',
      start: 12,
      end: 18,
    },
    evening: {
      name: 'вечером',
      start: 18,
      end: 24,
    },
  };
  const dateNow = new Date();
  const date = new Date(data);
  const day = dateNow.getDate() === date.getDate() ? days.today : days.tomorrow;
  let tod = '';
  const hour = date.getHours();
  if (tods.night.start <= hour && hour < tods.night.end) {
    tod = tods.night.name;
  } else if (tods.morning.start <= hour && hour < tods.morning.end) {
    tod = tods.morning.name;
  } else if (tods.day.start <= hour && hour < tods.day.end) {
    tod = tods.day.name;
  } else {
    tod = tods.evening.name;
  }
  return `${day} ${tod}`;
};

export default getTimesOfDay;
