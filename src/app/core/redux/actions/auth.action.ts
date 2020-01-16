export class LoginAction {
  static readonly type = '[Auth] Login action';

  constructor(public identifier: string, public password: string) {
  }
}
