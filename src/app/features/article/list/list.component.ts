import {Component, OnInit} from '@angular/core';

import {Store} from "@ngxs/store";

import {Post} from "../../../core/redux/models";
import {PostState} from "../../../core/redux/states";
import {FetchPostsAction} from "../../../core/redux/actions";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    posts: Post[];

    constructor(private store: Store) {
    }

    ngOnInit() {
      this.store.select(PostState.posts).subscribe((posts) => {
        this.posts = posts || [];
      });
      this.store.dispatch(new FetchPostsAction());
    }

}
