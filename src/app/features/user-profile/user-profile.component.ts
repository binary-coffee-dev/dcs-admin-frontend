import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {Store} from "@ngxs/store";

import {File, User} from "../../core/redux/models";
import {AuthState} from "../../core/redux/states";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {UpdateMeAction, UpdateMyAvatarAction} from "../../core/redux/actions";
import {UploadFileModalComponent} from "../components/upload-file.modal";

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

    constructor(private store: Store, private dialog: MatDialog) {
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
        if (this.me.avatar && this.me.avatar.url) {
            return `${environment.apiUrl}${this.me.avatar.url}`;
        }
        return 'assets/img/profile.png';
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

    openUploadFileModal() {
        const dialog = this.dialog.open(UploadFileModalComponent, {
            height: 'auto',
            width: '50vh',
        });
        dialog.afterClosed().subscribe((result: File) => {
            if (result) {
                this.store.dispatch(new UpdateMyAvatarAction(this.me.id, result.id));
            }
        });
    }
}
