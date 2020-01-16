import {Injectable} from '@angular/core';

import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {LOGIN_MUTATION} from "../../graphql/mutations";
import {LoginResponseModel} from "../models/login-response.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private apollo: Apollo) {
    }

    login(identifier: string, password: string): Observable<LoginResponseModel> {
        return this.apollo
            .mutate({mutation: LOGIN_MUTATION, variables: {identifier, password}})
            .pipe(map((result: any) => result.data.login));
    }
}
