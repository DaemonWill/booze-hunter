import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  private lat : number = 0;
  private lon : number = 0;

  public getLocation() : Promise<Object> {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getCoord(pos) : void {
    this.lat = pos.coords.latitude;
    this.lon = pos.coords.longitude;
  }

  public errorCb(err) : void {
    console.warn(err.code + err.message);
  }

  public getLat() : number {
    return this.lat;
  }
  public getLon() : number {
    return this.lon;
  }
}
