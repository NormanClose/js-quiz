// Questions Reducer

const questionsReducerDefaultState = [];

export default (state = questionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        action.question
      ];
    case 'REMOVE_QUESTION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_QUESTION':
      return state.map((question) => {
        if (question.id === action.id) {
          return {
            ...question,
            ...action.updates
          };
        } else {
          return question;
        };
      });
    case 'SET_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
};
