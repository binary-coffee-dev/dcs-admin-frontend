import {State} from '@ngxs/store';

import {AuthStateModel, initAuthStateModel} from "./auth-state.model";
import {AuthService} from "../services/auth.service";

@State<AuthStateModel>({
    name: 'auth',
    defaults: initAuthStateModel()
})
export class AuthState {

    constructor(private authService: AuthService) {
    }

}
