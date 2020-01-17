import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Apollo} from "apollo-angular";

import {Post, PostConnection} from "../models";
import {POST_QUERY, POSTS_QUERY} from "../../graphql/queries";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private apollo: Apollo) {
    }

    fetchPosts(limit, start = 0): Observable<PostConnection> {
        return this.apollo
            .watchQuery({query: POSTS_QUERY, variables: {limit, start}})
            .valueChanges.pipe(map((result: any) => result.data.postsConnection));
    }

    fetchPost(id: string): Observable<Post> {
        return this.apollo
            .watchQuery({query: POST_QUERY, variables: {id}})
            .valueChanges.pipe(map((result: any) => result.data.post));
    }
}
