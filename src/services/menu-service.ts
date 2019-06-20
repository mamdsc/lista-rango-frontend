import { AxiosResponse } from 'axios';
import { http } from './http';
import { IMenu } from '../meta-data/interfaces/IMenu';

const MenuService = {
   async getMenu (id: string): Promise<AxiosResponse<IMenu[]>> {
      return http.get<IMenu[]>(`/restaurants/${id}/menu`);
   }
};

export { MenuService };
