import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AppRoutingModule} from '../../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {LocationService} from './location.service';

describe('LocationService', () => {
  let service: LocationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = TestBed.inject(LocationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    const store: any =  {};
    spyOn(sessionStorage, 'setItem').and.callFake((key, value) => {
      return store[key] = value + '';
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be save Location', () => {
    service.saveLocation('test', 123)
      .subscribe(response => expect(response).toBeDefined());

    const req = httpTestingController.expectOne('http://localhost:3000/location');
    req.flush({});

    expect(req.request.method).toEqual('POST');
  });

  it('should be fail save location', () => {
    let response: any;
    let errResponse: any;

    service.saveLocation('test', 123)
      .subscribe(res => response = res, err => errResponse = err);

    const req = httpTestingController.expectOne(`http://localhost:3000/location`);

    const mockErrorResponse = {status: 400, statusText: 'Bad Request'};
    const data = 'Invalid request parameters';

    req.flush(data, mockErrorResponse);

    expect(req.request.method).toEqual('POST');
  });

  it('should be fail get locations', () => {
    let response: any;
    let errResponse: any;

    service.getLocations()
      .subscribe(res => response = res, err => errResponse = err);

    const req = httpTestingController.expectOne(`http://localhost:3000/getLocations`);

    const mockErrorResponse = {status: 400, statusText: 'Bad Request'};
    const data = 'Invalid request parameters';

    req.flush(data, mockErrorResponse);

    expect(req.request.method).toEqual('GET');
  });
});
