export const nameFilterChanged = name => ({
  type: "filters/NAME_FILTER_CHANGED",
  payload: name,
});

export const positionFilterChanged = position => ({
  type: "filters/POSITION_FILTER_CHANGED",
  payload: position,
});

export const ageFilterChanged = age => ({
  type: "filters/AGE_FILTER_CHANGED",
  payload: age,
});
