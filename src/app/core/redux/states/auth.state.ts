import {tap} from "rxjs/operators";
import {Action, Selector, State, StateContext} from '@ngxs/store';

import {AuthStateModel, initAuthStateModel} from "./auth-state.model";
import {AuthService} from "../services/auth.service";
import {LoginAction} from "../actions";

@State<AuthStateModel>({
    name: 'auth',
    defaults: initAuthStateModel()
})
export class AuthState {

    @Selector()
    static token(state: AuthStateModel): string {
        return state.token;
    }

    constructor(private authService: AuthService) {
    }

    @Action(LoginAction)
    loginAction(ctx: StateContext<AuthStateModel>, action: LoginAction) {
        return this.authService.login(action.identifier, action.password).pipe(
            tap((authData) => ctx.patchState({token: authData.jwt}))
        );
    }
}
