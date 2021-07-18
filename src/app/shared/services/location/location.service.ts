import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {LocationModel, LocationResponseModel} from '../../models/location.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private readonly http: HttpClient) { }

  saveLocation(Name: any, Area: number): Observable<any> {
    const endpoint = 'http://localhost:3000/location'
    const data: LocationModel = {
      Name: Name,
      Area: Area
    };
    return this.http.post<LocationResponseModel>(endpoint, data)
      .pipe(
        map(response => {
          return response;
        }), catchError(() => {
          return throwError({
            status: '0-001',
            statusText: 'Save Location Error'
          })
        }));
  }

  getLocations(): Observable<any> {
    const endpoint = 'http://localhost:3000/getLocations'
    return this.http.get<LocationResponseModel>(endpoint)
      .pipe(
        map(response => {
          sessionStorage.setItem('Locations', JSON.stringify(response.data.response))
          return response;
        }), catchError(() => {
          return throwError({
            status: '0-002',
            statusText: 'Get Locations Error'
          })
        }));
  }
}
