import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FALURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FALURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FALURE
} from '../constants'

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token,
};

export default function auth(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return{
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case LOGIN_SUCCESS:
      return{
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case SIGNUP_FALURE:
    case LOGIN_FALURE:
    case LOGOUT_SUCCESS:
      return{
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      }
    default:
      return state;
  }
}
