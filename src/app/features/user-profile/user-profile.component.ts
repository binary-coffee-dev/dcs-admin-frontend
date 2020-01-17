import {Component, OnInit} from '@angular/core';

import {Store} from "@ngxs/store";

import {User} from "../../core/redux/models";
import {AuthState} from "../../core/redux/states";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {UpdateMeAction} from "../../core/redux/actions";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    profileDataChange = false;
    passwordChange = false;

    me: User;

    profileForm = new FormGroup({
        email: new FormControl('', Validators.required),
        page: new FormControl('')
    });

    passwordForm = new FormGroup({
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required),
    });

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.store.select(AuthState.me).subscribe(me => {
            if (me) {
                this.me = me;
                this.profileForm.controls.email.setValue(me.email);
                this.profileForm.controls.page.setValue(me.page);
            }
        });
    }

    getUserImage() {
        return `${environment.apiUrl}${this.me.avatar.url}`;
    }

    saveUserData() {
        if (this.profileForm.valid) {
            this.store.dispatch(new UpdateMeAction(
                this.me.id,
                this.profileForm.controls.email.value,
                this.profileForm.controls.page.value
            ));
        }
    }

    onUserDataChange() {
        this.profileDataChange = this.me.page !== this.profileForm.controls.page.value ||
            this.me.email !== this.profileForm.controls.email.value;
    }

    savePassword() {

    }
}
