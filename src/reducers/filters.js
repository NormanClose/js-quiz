// Filters Reducer

const filtersReducerDefaultState = {
  level: '',
  category: ''
};
//SET_CATEGORY_FILTER
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LEVEL_FILTER':
      return {
        ...state,
        level: action.level
      };
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};
