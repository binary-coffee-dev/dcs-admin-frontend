import {Post} from "../models";

export class PostAction {
  static readonly type = '[Post] Fetch post';

  constructor(public postId: string) {
  }
}

export class PostUpdateAction {
  static readonly type = '[Post] Post update';

  constructor(public post: Post) {
  }
}

export class FetchPostsAction {
  static readonly type = '[Post] Fetch posts';
}

export class NextPageAction {
  static readonly type = '[Post] Next page';
}

export class PreviousPageAction {
  static readonly type = '[Post] Previous page';
}
