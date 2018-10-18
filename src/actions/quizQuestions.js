//ADD_QUIZ_QUESTION
export const addQuizQuestion = (question) => ({
  type: 'ADD_QUIZ_QUESTION',
  question
});

//SET_QUIZ_QUESTIONS
export const setQuizQuestions = (questions) => ({
  type: 'SET_QUIZ_QUESTIONS',
  questions
})