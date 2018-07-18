// Filters Reducer

const filtersReducerDefaultState = {
  level: 'All',
  category: 'All Cats'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LEVEL_FILTER':
      return {
        ...state,
        level: action.level
      };
    case 'SET CATEGORY_FILTER':
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};
