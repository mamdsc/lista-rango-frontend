import { ISales } from "./ISales";

export interface IMenu {
   restaurantId: number;
   group: string;
   image: string;
   name: string;
   price?: number;
   sales?: ISales[];
}
