import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import {Store} from "@ngxs/store";

import {FileState} from "../../../../core/redux/states";
import {File} from "../../../../core/redux/models";
import {FetchFilesAction} from "../../../../core/redux/actions";
import {normalizeImageUrl} from "../../../../core/utils/url-utils";

@Component({
    selector: 'app-select-image-modal',
    templateUrl: './select-image-modal.component.html',
    styleUrls: ['./select-image-modal.component.scss']
})
export class SelectImageModalComponent implements OnInit {

    files: File[] = [];

    constructor(private store: Store, private dialogRef: MatDialogRef<SelectImageModalComponent>) {
    }

    ngOnInit() {
      this.store.select(FileState.files).subscribe(files => {
        if (files) {
          this.files = files
        }
      });
      this.store.dispatch(new FetchFilesAction());
    }

    selectImage(image: File) {
        this.dialogRef.close(image);
    }

    normalizeUrl(url) {
        return normalizeImageUrl(url);
    }

}
