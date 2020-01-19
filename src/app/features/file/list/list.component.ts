import { Component, OnInit } from '@angular/core';

import {File} from "../../../core/redux/models";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit() {
  }

}
