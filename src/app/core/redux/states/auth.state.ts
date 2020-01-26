import {tap} from "rxjs/operators";
import {Action, Selector, State, StateContext} from '@ngxs/store';

import {AuthStateModel, initAuthStateModel} from "./auth-state.model";
import {AuthService} from "../services/auth.service";
import {LoginAction, LogoutAction, MeAction, UpdateMeAction, UpdateMyAvatarAction} from "../actions";
import {User} from "../models";

@State<AuthStateModel>({
    name: 'auth',
    defaults: initAuthStateModel()
})
export class AuthState {

    @Selector()
    static token(state: AuthStateModel): string {
        return state.token;
    }

    @Selector()
    static me(state: AuthStateModel): User {
        return state.me;
    }

    constructor(private authService: AuthService) {
    }

    @Action(LoginAction)
    loginAction(ctx: StateContext<AuthStateModel>, action: LoginAction) {
        return this.authService.login(action.identifier, action.password).pipe(
            tap((authData) => ctx.patchState({token: authData.jwt}))
        );
    }

    @Action(LogoutAction)
    logoutAction(ctx: StateContext<AuthStateModel>) {
        ctx.patchState({token: ''});
    }

    @Action(MeAction)
    meAction(ctx: StateContext<AuthStateModel>) {
        return this.authService.me().pipe(
            tap(me => ctx.patchState({me}))
        );
    }

    @Action(UpdateMeAction)
    updateMeAction(ctx: StateContext<AuthStateModel>, action: UpdateMeAction) {
        return this.authService.updateMeAction(action.id, action.email, action.page).pipe(
            tap(me => ctx.patchState({me}))
        );
    }

    @Action(UpdateMyAvatarAction)
    updateMyAvatarAction(ctx: StateContext<AuthStateModel>, action: UpdateMyAvatarAction) {
        return this.authService.updateMyAvatarAction(action.id, action.avatar).pipe(
            tap(me => ctx.patchState({me}))
        );
    }
}
