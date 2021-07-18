import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationService } from '../../../shared/services/location/location.service'
import { LocationComponent } from './location.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from "rxjs";
import {AppRoutingModule} from "../../../app-routing.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let locationService: LocationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationComponent ],
      imports: [
        AppRoutingModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    locationService = TestBed.inject(LocationService);

    spyOn(locationService, 'saveLocation').and.returnValue(of(true));
    spyOn(locationService, 'getLocations').and.returnValue(of(true));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
