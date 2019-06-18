import { Hours } from "./Hours";

export interface Restaurante {
   id: number,
   name: string,
   address: string,
   image: string,
   hours?: Hours[],
   abertoAgora: boolean
};