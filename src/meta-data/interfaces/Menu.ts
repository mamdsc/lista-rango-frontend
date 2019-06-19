import { Sales } from "./Sales";

export interface Menu {
   restaurantId: number;
   group: string;
   image: string;
   name: string;
   price: number;
   sales: Sales[]; 
}
