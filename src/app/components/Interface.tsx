export interface Iprops {
    images: any;
  }
  
export interface IIprops{
  image:any,
  categoryName:string,
  slug:string,
  description:string,
  price:number,
  name:string,
  _id:string,
  imageUrl:any,

}

export interface fullProduct {
  _id: string;
  image: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}