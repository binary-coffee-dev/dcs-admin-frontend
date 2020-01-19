import { Component, OnInit } from '@angular/core';

import {Store} from "@ngxs/store";

import {File} from "../../../core/redux/models";
import {FetchFilesAction} from "../../../core/redux/actions";
import {FileState} from "../../../core/redux/states";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  files: File[] = [];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(FileState.files).subscribe(files => this.files = files);
    this.store.dispatch(new FetchFilesAction());
  }

}
