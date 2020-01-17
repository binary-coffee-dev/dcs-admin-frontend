export class LoginAction {
    static readonly type = '[Auth] Login action';

    constructor(public identifier: string, public password: string) {
    }
}

export class LogoutAction {
    static readonly type = '[Auth] Logout action';
}

export class MeAction {
    static readonly type = '[Auth] get my data action';
}

export class UpdateMeAction {
    static readonly type = '[Auth] Update me action';

    constructor(public id: string, public email: string, public page: string) {
    }
}
