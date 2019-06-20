import * as React from 'react';
import { RestauranteService } from '../../services/restaurante-service';
import { RouteComponentProps } from 'react-router';
import { MenuRestaurante } from '../components/menu/menu-restaurante';
import { DetalhesRestaurante } from '../components/menu/detalhes-restaurante';
import { IMenu, IRestaurante, IGrupo } from '../../meta-data/interfaces';
import { LayoutStyled } from '../components/layout.styled';
import { MenuService } from '../../services/menu-service';
import { Input } from '../components/common/input';
import { Link } from 'react-router-dom';
import { Loading } from '../components/common/loading';
import { MenuContainerStyled } from './menu-container.styled';

interface IProps extends RouteComponentProps<{ id: string }> {
}

interface IMenuContainerState {
   menu: IMenu[];
   restaurante: IRestaurante;
   isLoading: boolean;
}

class MenuContainer extends React.Component<IProps, IMenuContainerState> {

   public listaItensMenu: IMenu[] = [];
   public grupos: string[] = [];

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
   
   public separarGrupos = (): IGrupo[] => {
      const { menu } = this.state;
      let grupo: IGrupo = {nome: '', itens: []};
      let grupos: IGrupo[] = [];

      const x: string[] = [];
      menu.map(item => {
         if (x.includes(item.group.toLowerCase()) === false) {
            x.push(item.group.toLowerCase())
         }
         
      })
      
      x.map(i => {
         grupo = {
            nome: i,
            itens: []
         }
         menu.map(i => {
            if (i.group.toLowerCase() === grupo.nome.toLowerCase()) {
               grupo.itens.push(i)
            }
         })
         grupos.push(grupo);
      })
      return grupos;
   }

   public render(): JSX.Element {

      const { restaurante, isLoading } = this.state;

      return (
         <LayoutStyled>
            {isLoading ?
            <Loading/> :
               <MenuContainerStyled>
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
                  <div id='menu'>
                     <Input
                        aplicarFiltro={this.aplicarFiltro}
                        marginTop={'16px'}
                        marginBottom={'24px'}
                        placeholder={'Buscar no cardápio'}
                        width={'791px'}
                     />
                     <MenuRestaurante grupos={this.separarGrupos()}/>
                  </div>
                  <div id='retangulo'/>
               </MenuContainerStyled>
            }
         </LayoutStyled>
      );
   }
}

export { MenuContainer };

