import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {Store} from "@ngxs/store";

import {File} from "../../../core/redux/models";
import {FetchFilesAction} from "../../../core/redux/actions";
import {FileState} from "../../../core/redux/states";
import {UploadFileModalComponent} from "./upload-file.modal";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    files: File[] = [];

    constructor(private store: Store, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.store.select(FileState.files).subscribe(files => this.files = files);
        this.refreshPage();
    }

    openUploadFileModal() {
      const dialog = this.dialog.open(UploadFileModalComponent, {
          height: 'auto',
          width: '50vh',
      });
      dialog.afterClosed().subscribe(result => {
          if (result) {
              this.refreshPage();
          }
      });
    }

    refreshPage() {
        this.store.dispatch(new FetchFilesAction()).subscribe(() => {});
    }
}
