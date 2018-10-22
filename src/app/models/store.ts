export class Store {
  private name : string;
  private address : string;
  private id : number;
  private latitude : number;
  private longitude : number;

  constructor(newName: string, newAdd: string, newId: number, newLat: number,
              newLon: number){
      this.name = newName;
      this.address = newAdd;
      this.id = newId;
      this.latitude = newLat;
      this.longitude = newLon;
  };

  //getters & setters
  public getName(){
    return this.name;
  };
  public getAddress(){
    return this.address;
  };
  public getId(){
    return this.id;
  };
  public getLatitude(){
    return this.latitude;
  };
  public getLongitude(){
    return this.longitude;
  };

  public setName(newVal: string){
    this.name = newVal;
  };
  public setAddress(newVal: string){
    this.address = newVal;
  };
  public setId(newVal: number){
    this.id = newVal;
  };
  public setLatitude(newVal: number){
    this.latitude = newVal;
  };
  public setLongitude(newVal: number){
    this.longitude = newVal;
  };
}
