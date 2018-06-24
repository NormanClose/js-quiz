import uuid from 'uuid';
//import database from '../firebase/firebase';

// ADD_QUESTION
export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
});

export const startAddExpense = (questionData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      language = '',
      level = 1,
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
    const expense = { language,level,question,questionType,answer1Correct,answer1,answer2Correct,answer2,answer3Correct,answer3,answer4Correct,answer4,answer5Correct,answer5,answer6Correct,answer6};

    dispatch(addQuestion({id: uid, ...question}));
    // return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
    //   dispatch(addExpense({
    //     id: ref.key,
    //     ...expense
    //   }));
    // });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense (id, updates))
    })
  }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
