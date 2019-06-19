import { AxiosResponse } from 'axios';
import { IRestaurante } from '../meta-data/interfaces/Restaurante';
import { http } from './http';

const RestauranteService = {
   async getRestaurantes(): Promise<AxiosResponse<IRestaurante[]>> {
      return http.get<IRestaurante[]>('/restaurants');
   },
   async getRestaurantePorId(id: string): Promise<AxiosResponse<IRestaurante>> {
      return http.get<IRestaurante>(`/restaurants/${id}`);
   }
};

export { RestauranteService };
