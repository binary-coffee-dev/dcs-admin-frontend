export interface AuthStateModel {
    token
}

export const initAuthStateModel = () => {
    return {
        token: ''
    } as AuthStateModel;
};
