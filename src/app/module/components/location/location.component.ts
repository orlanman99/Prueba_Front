import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../../shared/services/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private readonly locationService: LocationService) { }

  location = '';
  area = 0;
  locations:any[] = [];
  enable = false;
  ngOnInit(): void {
  }

  saveLocation(){
    this.locationService.saveLocation(this.location,this.area).subscribe();
  }

  getLocations(){
    this.locationService.getLocations().subscribe(() =>{
      this.enable = true;
      this.locations= JSON.parse(<string>sessionStorage.getItem('Locations'));
    });
  }

}
