// SET_LEVEL_FILTER
export const setLevelFilter = (level = '') => ({
  type: 'SET_LEVEL_FILTER',
  level
});

// SET_CATEGORY_FILTER
export const setCategoryFilter = (category = '') => ({
  type: 'SET_CATEGORY_FILTER',
  category
});