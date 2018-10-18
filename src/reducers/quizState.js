// Quiz State Reducer

const quizStateReducerDefaultState = {
  showAnswers: null,
  numberCorrect: 0
};

export default (state = quizStateReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SHOW_ANSWERS':
      return {
        ...state,
        showAnswers: action.showAnswers
      };
    case 'SET_NUMBER_CORRECT':
      return {
        ...state,
        numberCorrect: action.numberCorrect
      };
    default:
      return state;
  }
};
