import ApiHandler from './apihandler';
import endpoint from './endpoints';

export const login = body => {
  return ApiHandler().post(endpoint.LOGIN, body);
};

export const signUp = body => {
  return ApiHandler().post(endpoint.SIGNUP, body);
};

export const getCategories = body => {
  return ApiHandler().get(endpoint.CATEGORIES, body);
};

export const getDoctors = body => {
  return ApiHandler().get(endpoint.DOCTORS, body);
};
