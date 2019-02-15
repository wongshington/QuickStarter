import merge from 'lodash/merge';
import { RECEIVE_CATEGORY, RECEIVE_ALL_CATEGORIES } from '../actions/category_actions';

const CategoriesReducer = (state = {}, action) => {
  
Object.freeze(state);
switch (action.type) {
  case RECEIVE_CATEGORY:
  const newCategory = {[action.category.id]: action.category};
    return merge({}, state, newCategory);
  case RECEIVE_ALL_CATEGORIES:
    return action.categories;
  default:
    return state;
}

};

export default CategoriesReducer;
