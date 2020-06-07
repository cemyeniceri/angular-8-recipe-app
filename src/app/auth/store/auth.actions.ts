import {Action} from '@ngrx/store';

export const LOGIN_START = 'LOGIN_START';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAIL = 'AUTHENTICATE_FAIL';
export const SIGN_UP_START = 'SIGN_UP_START';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const AUTO_LOGIN = 'AUTO_LOGIN';

export class AuthenticateSuccessAction implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date,
    redirect: boolean
  }) {
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LoginStartAction implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class SignUpStartAction implements Action {
  readonly type = SIGN_UP_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class AuthenticateFailAction implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {
  }
}

export class ClearErrorAction implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLoginAction implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions =
  AuthenticateSuccessAction
  | LogoutAction
  | LoginStartAction
  | AuthenticateFailAction
  | SignUpStartAction
  | ClearErrorAction
  | AutoLoginAction;