import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFile.ModalComponent } from './upload-file.modal.component';

describe('UploadFile.ModalComponent', () => {
  let component: UploadFile.ModalComponent;
  let fixture: ComponentFixture<UploadFile.ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFile.ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFile.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
