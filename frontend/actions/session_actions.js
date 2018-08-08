import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// thunks
export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user),
    error => dispatch(receiveErrors(error))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser(), 
    error => dispatch(receiveErrors(error))
  ))
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user),
    error => dispatch(receoveErrors(error))
  ))
);

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
})

// actions

