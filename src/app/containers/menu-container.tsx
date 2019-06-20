import * as React from 'react';
import { RestauranteService } from '../../services/restaurante-service';
import { RouteComponentProps } from 'react-router';
import { MenuRestaurante } from '../components/menu/menu-restaurante';
import { DetalhesRestaurante } from '../components/menu/detalhes-restaurante';
import { IRestaurante } from '../../meta-data/interfaces/IRestaurante';
import { IMenu } from '../../meta-data/interfaces/IMenu';
import { LayoutStyled } from '../components/layout.styled';
import { MenuService } from '../../services/menu-service';
import { Input } from '../components/common/input';
import { Link } from 'react-router-dom';
import { Loading } from '../components/common/loading';

interface IProps extends RouteComponentProps<{ id: string }> {
}

interface IMenuContainerState {
   menu: IMenu[];
   restaurante: IRestaurante;
   isLoading: boolean;
}

class MenuContainer extends React.Component<IProps, IMenuContainerState> {

   public listaItensMenu: IMenu[] = [];

   public constructor (props: IProps) {
      super(props);
      this.state = {
         menu: [],
         restaurante: {id: 0, name: '', address: '', image: '', hours: [], abertoAgora: false},
         isLoading: false
      }
   }

   async componentDidMount() {
      this.obtemRestaurante();
      this.obtemMenu();
   }

   public obtemMenu = async () => {
      this.setLoading(true);
      try {
         const response = await MenuService.getMenu(this.props.match.params.id);
         this.listaItensMenu = response.data;
         this.setState({
            menu: response.data
         })
         this.setLoading(false);
      } catch (err) {
         this.setLoading(false);
         throw Error(`Request error. ->> ${err}`);
      }
   }

   public obtemRestaurante = async () => {
      this.setLoading(true);
      try {
         const response = await RestauranteService.getRestaurantePorId(this.props.match.params.id);
         this.setState({
            restaurante: response.data
         })
         this.setLoading(false);
      } catch (err) {
         this.setLoading(false);
         throw Error(`Request error. ->> ${err}`);
      }
   }

   public setLoading = (isLoading: boolean) => {
      this.setState({
         isLoading
      });
   }

   public filtrarItens(nomeFiltro: string) {
      const itensMenu = this.listaItensMenu.map(r => r.name);
      return itensMenu.filter((i) => {
         return i.toLowerCase().includes(nomeFiltro.toLowerCase());
      })
   }

   public aplicarFiltro = (nomeFiltro: string) => {
      if (!nomeFiltro) {
         this.obtemMenu();
      }
      
      const filtrados = this.filtrarItens(nomeFiltro);

      let itemFiltrados: IMenu[] = [];

      filtrados.map(item => 
         this.listaItensMenu.map(itemMenu => {
            if (itemMenu.name === item) {
               itemFiltrados.push(itemMenu)
            } return itemFiltrados
         })
      );      

      this.setState({
         menu: itemFiltrados
      })
   }

   public diasDaSemana = (days: number): string => {
   switch (days)
   {
      case 1:
         return 'Domingo';
      case 2:
         return 'Segunda';
      case 3:
         return 'Terça';
      case 4:
         return 'Quarta';
      case 5:
         return 'Quinta';
      case 6:
         return 'Sexta'
      case 7:
         return 'Sábado'
      default:
         return ''
   }
}

public primeiro = (days: number[]): string => {
   const primeiro = this.diasDaSemana(days[ 0 ]);
   return primeiro;
}

public ultimo = (days: number[]): string => {
   const ultimo = this.diasDaSemana(days[days.length - 1]);
   return ultimo;
}

   public render(): JSX.Element {

      const { restaurante, menu, isLoading } = this.state;

      return (
         <LayoutStyled>
            {isLoading ?
            <Loading/> :
               <div>
                  <header>
                     <Link to={'/'}>
                        <button className='btnVoltar'>Voltar</button>
                     </Link>
                  </header>
                  <DetalhesRestaurante
                     restaurante={restaurante}
                     primeiroDiaDaSemana={this.primeiro}
                     ultimoDiaDaSemana={this.ultimo}
                  />
                  <Input
                     aplicarFiltro={this.aplicarFiltro}
                     margin={'16px'}
                     placeholder={'Buscar no cardápio'}
                  />
                  <MenuRestaurante menu={menu}/>
               </div>
            }
         </LayoutStyled>
      );
   }
}

export { MenuContainer };

