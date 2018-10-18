// Quiz Questions Reducer

const quizQuestionsReducerDefaultState = [];

export default (state = quizQuestionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUIZ_QUESTION':
      return [
        ...state,
        action.question
      ];
    case 'SET_QUIZ_QUESTIONS':
      return action.quizQuestions;
    default:
      return state;
  }
};
