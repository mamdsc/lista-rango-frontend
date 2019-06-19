import * as React from 'react';
import { ApiRestaurantes } from '../../services/api-restaurantes';
import { RouteComponentProps } from 'react-router';
import { MenuRestaurante } from '../components/menu/menu-restaurante';
import { DetalhesRestaurante } from '../components/menu/detalhes-restaurante';
import { Restaurante } from '../../meta-data/interfaces/Restaurante';
import { Menu } from '../../meta-data/interfaces/Menu';
import { LayoutStyled } from '../components/layout.styled';

interface IProps extends RouteComponentProps<{ id: string }> {
}

interface IMenuContainerState {
   menu: Menu[];
   restaurante: Restaurante[];
}

class MenuContainer extends React.Component<IProps, IMenuContainerState> {

   public constructor (props: IProps) {
      super(props);
      this.state = {
         menu: [],
         restaurante: []
      }
   }

   async componentDidMount() {
      this.obtemRestaurante();
      this.obtemMenu();
   }

   public obtemMenu = async () => {
      try {
         const response = await ApiRestaurantes.get(`/restaurants/${this.props.match.params.id}/menu`);
         this.setState({
            menu: response.data
         })
      } catch(e) {
         alert('error')
      }
   }

   public obtemRestaurante = async () => {
      const response = await ApiRestaurantes.get('restaurants');
      const restaurante = response.data.filter((r: Restaurante) =>
         r.id === parseInt(this.props.match.params.id)
      )
      this.setState({
         restaurante
      })
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

