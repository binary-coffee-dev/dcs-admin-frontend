import { Component, OnInit } from '@angular/core';
import {Post} from "../../../core/redux/models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit() {
  }

  onBodyChange() {
    this.post.body = this.articleForm.controls.body.value;
  }
}
