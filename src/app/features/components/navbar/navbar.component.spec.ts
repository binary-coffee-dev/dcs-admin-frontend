import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {Subject} from "rxjs";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    let location = new Subject();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NavbarComponent],
            providers: [
                {provide: Location, useValue: location}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
