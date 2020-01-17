import {User} from "../models";

export interface AuthStateModel {
    token,
    me: User
}

export const initAuthStateModel = () => {
    return {
        token: '',
        me: {}
    } as AuthStateModel;
};
