import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Store} from "@ngxs/store";

import {Post} from "../../../core/redux/models";
import {PostState} from "../../../core/redux/states";
import {PostUpdateAction} from "../../../core/redux/actions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    post: Post = {
        body: ''
    } as Post;

    articleForm = new FormGroup({
        body: new FormControl(''),
        enable: new FormControl(''),
        description: new FormControl(''),
        title: new FormControl('')
    });

    constructor(private store: Store, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.isNewPost()) {

        } else {
            this.store.select(PostState.post).subscribe(post => {
                if (post) {
                    this.post = {...post};
                    this.articleForm.controls.body.setValue(this.post.body);
                    this.articleForm.controls.description.setValue(this.post.description);
                    this.articleForm.controls.title.setValue(this.post.title);
                    this.articleForm.controls.enable.setValue(Boolean(this.post.enable));
                }
            });
        }
    }

    isNewPost() {
        return !this.activatedRoute.snapshot.params.id;
    }

    onBodyChange() {
        this.post.body = this.articleForm.controls.body.value;
    }

    submitPost() {
        this.post.body = this.articleForm.controls.body.value;
        this.post.description = this.articleForm.controls.description.value;
        this.post.title = this.articleForm.controls.title.value;
        this.post.enable = this.articleForm.controls.enable.value;

        if (this.isNewPost()) {

        } else {
            this.store.dispatch(new PostUpdateAction(this.post)).subscribe(() => {
            });
        }
    }
}
