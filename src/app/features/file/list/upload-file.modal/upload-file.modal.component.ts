import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload-file.modal',
  templateUrl: './upload-file.modal.component.html',
  styleUrls: ['./upload-file.modal.component.scss']
})
export class UploadFileModalComponent implements OnInit {

  uploadFileForm = new FormGroup({
    name: new FormControl(''),
    file: new FormControl(''),
  });

  size: number = null;
  type: string = null;
  image: string | ArrayBuffer = null;

  constructor() { }

  ngOnInit() {
  }

  onFilesChange(event) {
    if (event.target.files && event.target.files.length > 0 && event.target.files[0]) {
      const file = event.target.files[0];
      this.uploadFileForm.controls.name.setValue(file.name);
      this.size = file.size;
      this.type = file.type;

      const reader = new FileReader();
      reader.onload = () => this.image = reader.result;
      reader.readAsDataURL(file);
    }
  }


  getSize() {
    return `${Math.round(this.size / 1024 * 100)/100} kB`;
  }
}
