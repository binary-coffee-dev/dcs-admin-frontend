import {Injectable} from '@angular/core';

import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {LOGIN_MUTATION} from "../../graphql/mutations";
import {ME_QUERY} from "../../graphql/queries";
import {LoginResponseModel} from "../models/login-response.model";
import {User} from "../models";

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

    me(): Observable<User> {
        return this.apollo
            .watchQuery({query: ME_QUERY})
            .valueChanges.pipe(map((result: any) => result.data.myData));
    }
}
