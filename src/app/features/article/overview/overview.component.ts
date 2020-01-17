import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Store} from "@ngxs/store";

import {Post} from "../../../core/redux/models";
import {PostState} from "../../../core/redux/states";

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
        body: new FormControl('')
    });

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.store.select(PostState.post).subscribe(post => {
            if (post) {
                this.post = {...post};
                this.articleForm.controls.body.setValue(this.post.body);
            }
        });
    }

    onBodyChange() {
        this.post.body = this.articleForm.controls.body.value;
    }
}
