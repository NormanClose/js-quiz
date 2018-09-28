//import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_QUESTION
export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
});

export const startAddQuestion = (questionData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      language = '',
      level = 1,
      category,
      question = '',
      questionType = 'single',
      answer1Correct = false,
      answer1 = '',
      answer2Correct = false,
      answer2 = '',
      answer3Correct = false,
      answer3 = '',
      answer4Correct = false,
      answer4 = '',
      answer5Correct = false,
      answer5 = '',
      answer6Correct = false,
      answer6 = ''
    } = questionData;
    const questionInput = { language,level,category,question,questionType,answer1Correct,answer1,answer2Correct,answer2,answer3Correct,answer3,answer4Correct,answer4,answer5Correct,answer5,answer6Correct,answer6};

console.log('user is ' + uid);
//does not work - ".write": "data.parent().child('admins').child(auth.uid).exists()"

    return database.ref(`/questions`).push(questionInput).then((ref) => {
      dispatch(addQuestion({
        id: ref.key,
        ...questionInput
      }));
    });
  };
};

// REMOVE_QUESTION
export const removeQuestion = ({ id } = {}) => ({
  type: 'REMOVE_QUESTION',
  id
});

export const startRemoveQuestion = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`/questions/${id}`).remove().then(() => {
      dispatch(removeQuestion({ id }));
    });
  };
};

// EDIT_QUESTION
export const editQuestion = (id, updates) => ({
  type: 'EDIT_QUESTION',
  id,
  updates
});

export const startEditQuestion = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`/questions/${id}`).update(updates).then(() => {
      dispatch(editQuestion (id, updates))
    })
  }
};

// SET_QUESTIONS
export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
});

export const startSetQuestions = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`/questions`).once('value').then((snapshot) => {
      const questions = [];

      snapshot.forEach((childSnapshot) => {
        questions.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setQuestions(questions));
    });
  };
};
