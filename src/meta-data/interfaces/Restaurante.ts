import { IHours } from "./Hours";

export interface IRestaurante {
   id: number;
   name: string;
   address: string;
   image: string;
   hours?: IHours[];
   abertoAgora: boolean;
};