export class House {

  houseID: any;
  photos: any[];
  title: string;
  city: string;
  noOfRooms: number;
  surface: string;
  type: string;
  currentPrice: number;
  imageUrl: string;
  sellType: any;
  userID:  any;


  constructor(houseID: any, photos: any[], title: string, city: string, noOfRooms: number, surface: string, type: string, currentPrice: number, imageUrl: string, sellType: any, userID: any) {
    this.houseID = houseID;
    this.photos = photos[0];
    this.title = title;
    this.city = city;
    this.noOfRooms = noOfRooms;
    this.surface = surface;
    this.type = type;
    this.currentPrice = currentPrice;
    this.imageUrl = imageUrl;
    this.sellType = sellType;
    this.userID = userID;
  }
}
