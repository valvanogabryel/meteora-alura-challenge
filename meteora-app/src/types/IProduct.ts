import { StaticImageData } from "next/image";

export default interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
}
