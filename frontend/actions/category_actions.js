import * as APIUtil from '../util/category_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});


export const getCategories = () => dispatch => (
  APIUtil.getCategories().then(categories => (dispatch(receiveAllCategories(categories)) )
));


export const getCategory = (id) => dispatch => (
  APIUtil.getCategory(id).then(category => (dispatch(receiveCategory(category)) )
));
