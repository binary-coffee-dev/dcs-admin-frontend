import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngxs/store";

import {LoginAction} from "../../core/redux/actions";
import {AuthState} from "../../core/redux/states";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

    loginForm = new FormGroup({
        identifier: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private store: Store, private router: Router) {
    }

    login() {
        if (this.loginForm.valid) {
            const identifier = this.loginForm.controls.identifier.value;
            const password = this.loginForm.controls.password.value;
            this.store.dispatch(new LoginAction(identifier, password)).subscribe(() => {
                this.redirectToDashboard();
            })
        }
    }

    redirectToDashboard() {
        const token = this.store.selectSnapshot(AuthState.token);
        if (token !== '') {
            this.router.navigate(['dashboard']);
        }
    }
}
