export class Product {
  private name : string;
  private producerName : string;
  private imgUrl : string;
  private price : number;           //average price documented
  private description : string;
  private id : number;
  private type : string;
  private alcoholPercent : number;
  private adjectives : string[];    //tastes, colors, smells, etc.

  constructor(newName: string, newProd: string, newImg: string, newPrice: number,
              newDesc: string, newId: number, newType: string, newAlc: number,
              newAdjs: string[]){
      this.name = newName;
      this.producerName = newProd;
      this.imgUrl = newImg;
      this.price = newPrice;
      this.description = newDesc;
      this.id = newId;
      this.type = newType;
      this.alcoholPercent = newAlc;
      this.adjectives = newAdjs;
  };

  //getters & setters
  public getName(){
    return this.name;
  };
  public getProducerName(){
    return this.producerName;
  };
  public getImgUrl(){
    return this.imgUrl;
  };
  public getPrice(){
    return this.price;
  };
  public getDescription(){
    return this.description;
  };
  public getId(){
    return this.id;
  };
  public getType(){
    return this.type;
  };
  public getAlcoholPercent(){
    return this.alcoholPercent;
  };
  public getAdjectives(){
    return this.adjectives;
  };

  public setName(newVal: string){
    this.name = newVal;
  };
  public setProducerName(newVal: string){
    this.producerName = newVal;
  };
  public setImgUrl(newVal: string){
    this.imgUrl = newVal;
  };
  public setPrice(newVal: number){
    this.price = newVal;
  };
  public setDescription(newVal: string){
    this.description = newVal;
  };
  public setId(newVal: number){
    this.id = newVal;
  };
  public setType(newVal: string){
    this.type = newVal;
  };
  public setAlcoholPercent(newVal: number){
    this.alcoholPercent = newVal;
  };
  public setAdjectives(newVal: string[]){
    this.adjectives = newVal;
  };
}
