import * as React from 'react';
import { RestauranteService } from '../../services/restaurante-service';
import { RouteComponentProps } from 'react-router';
import { MenuRestaurante } from '../components/menu/menu-restaurante';
import { DetalhesRestaurante } from '../components/menu/detalhes-restaurante';
import { IRestaurante } from '../../meta-data/interfaces/Restaurante';
import { IMenu } from '../../meta-data/interfaces/Menu';
import { LayoutStyled } from '../components/layout.styled';
import { MenuService } from '../../services/menu-service';

interface IProps extends RouteComponentProps<{ id: string }> {
}

interface IMenuContainerState {
   menu: IMenu[];
   restaurante: IRestaurante;
}

class MenuContainer extends React.Component<IProps, IMenuContainerState> {

   public constructor (props: IProps) {
      super(props);
      this.state = {
         menu: [],
         restaurante: {id: 0, name: '', address: '', image: '', hours: [], abertoAgora: false}
      }
   }

   async componentDidMount() {
      this.obtemRestaurante();
      this.obtemMenu();
   }

   public obtemMenu = async () => {
      try {
         const response = await MenuService.getMenu(this.props.match.params.id);
         this.setState({
            menu: response.data
         })
      } catch (err) {
         throw Error(`Request error. ->> ${err}`);
      }
   }

   public obtemRestaurante = async () => {
      try {
         const response = await RestauranteService.getRestaurantePorId(this.props.match.params.id);
         this.setState({
            restaurante: response.data
         })
      } catch (err) {
         throw Error(`Request error. ->> ${err}`);
      }
   }

   public render(): JSX.Element {

      const { restaurante, menu } = this.state;

      return (
         <LayoutStyled>
            <header/>
            <DetalhesRestaurante restaurante={restaurante}/>
            <MenuRestaurante menu={menu}/>
         </LayoutStyled>
      );
   }
}

export { MenuContainer };

