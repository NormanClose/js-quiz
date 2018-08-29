import database from '../firebase/firebase';

// ADD_CATEGORY
export const addCategory = (category) => ({
  type: 'ADD_CATEGORY',
  category
});

export const startAddCategory = (categoryData = {}) => {
  return (dispatch, getState) => {

    const {
      category = ''
    } = categoryData;
    const categoryValue = { category };
console.log('categoryValue', categoryValue);
    return database.ref(`/categories`).push(categoryValue).then((ref) => {
      dispatch(addCategory({
        id: ref.key,
        ...categoryValue
      }));
    });
  };
};

// SET_CATEGORIES
export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  categories
});

export const startSetCategories = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`/categories`).once('value').then((snapshot) => {
      const categories = [];

      snapshot.forEach((childSnapshot) => {
        categories.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setCategories(categories));
    });
  };
};