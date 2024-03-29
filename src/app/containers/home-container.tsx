import * as React from 'react';
import { IRestaurante, IHours } from '../../meta-data/interfaces';
import { LayoutStyled } from '../components/layout.styled';
import { ListaRestaurantes } from '../components/home/lista-restaurantes';
import { RestauranteService } from '../../services/restaurante-service';
import { Input } from '../components/common/input/input';
import { Loading } from '../components/common/loading/loading';
import { HomeContainerStyled } from './home-container.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/default';
import { Error } from '../components/common/error/error';

interface IHomeContainerState {
   restaurantes: IRestaurante[],
   abertoAgora: boolean;
   isLoading: boolean;
   error: boolean;
}

class HomeContainer extends React.Component<{}, IHomeContainerState> {

   public listaDeRestaurantes: IRestaurante[] = [];

   public constructor (props: {}) {
      super(props);
      this.state = {
         restaurantes: [],
         abertoAgora: false,
         isLoading: false,
         error: false
      };
   }

   async componentDidMount() {
      this.obtemRestaurantes();
   }

   public setLoading = (isLoading: boolean) => {
      this.setState({
         isLoading
      });
   }

   public obtemRestaurantes = async () => {
      this.setLoading(true);
      try {
         const response = await RestauranteService.getRestaurantes();
         this.listaDeRestaurantes = response.data;

         let restaurantes = response.data;
         restaurantes.map(r => {
            const statusAgora = this.status(r.hours)
            return r.abertoAgora = statusAgora;
         })

         let restaurantesOrdenados: IRestaurante[] = [];
         restaurantesOrdenados = this.ordenar(restaurantes);

         this.setState({
            restaurantes: restaurantesOrdenados
         })
         this.setLoading(false);
      } catch (err) {
         this.setLoading(false);
         this.setState({
            error: true
         })
         console.error(err);
      }
   }

   public ordenar = (restaurantes: IRestaurante[]): IRestaurante[] => {      
      
      restaurantes.sort((a, b) => {
         if (a.name > b.name){
            return 1;
         }
         if (a.name < b.name) {
            return -1;
         }
         return 0;
      });

      return restaurantes.sort((a, b) => {
         if (a.abertoAgora < b.abertoAgora){
            return 1;
         }
         if (a.abertoAgora > b.abertoAgora) {
            return -1;
         }
         return 0;
      });
   }

   public filtrarItens(nomeRestaurante: string) {
      const nomesRestaurantes = this.listaDeRestaurantes.map(r => r.name);
      return nomesRestaurantes.filter((i) => {
         return i.toLowerCase().includes(nomeRestaurante.toLowerCase());
      })
   }

   public aplicarFiltro = (nomeRestaurante: string) => {   
      if (!nomeRestaurante) {
         this.setState({
            restaurantes: this.listaDeRestaurantes
         })
      }
      
      const filtrados = this.filtrarItens(nomeRestaurante);

      let restaurantesFiltrados: IRestaurante[] = [];

      filtrados.map(item => 
         this.listaDeRestaurantes.map(restaurante => {
            if (restaurante.name === item) {
               restaurantesFiltrados.push(restaurante)
            } return restaurantesFiltrados
         })
      );      

      this.setState({
         restaurantes: restaurantesFiltrados
      })
   }

   public horaAberto = (from: string) => {
      let horaAbetura = new Date();
      const numberHour = parseInt(from);
      horaAbetura.setHours(numberHour);
      return horaAbetura.getHours();
   }
   
   public horaFechado = (to: string) => {
      let horaFecha = new Date();
      const numberHour = parseInt(to);
      horaFecha.setHours(numberHour);
      return horaFecha.getHours();
   }

   
   public status = (hours?: IHours[]): boolean => {
      let agora = new Date();
      let horaAtual = agora.getHours();
      let hoje = agora.getDay();
      
      if (!hours) return false;

      let aberto: boolean = false;
      hours.map(h => {

         if (this.horaAberto(h.from) >= horaAtual && this.horaFechado(h.to) >= horaAtual) {
            h.days.map(d => {
               if (d === hoje) {
                  return aberto = true;
               }
               return null
            });
         }
         return null
      });
      
      return aberto;
   }

   public render(): JSX.Element {

      const { restaurantes, isLoading, error } = this.state;

      return (
         <ThemeProvider theme={theme}>
         <LayoutStyled>
            {error && <Error/>}
            {isLoading ?
               <Loading/> :
               <HomeContainerStyled>
                  <header/>
                  <h1>Bem-vindo ao Lista Rango</h1>
                  <Input
                     aplicarFiltro={this.aplicarFiltro}
                     placeHolder={'Buscar estabelecimento'}
                     marginTop={'30px'}
                     marginBottom={'40px'}
                  />
                  <ListaRestaurantes restaurantes={restaurantes}/>
               </HomeContainerStyled>
            }
         </LayoutStyled>
         </ThemeProvider>
      );
   }
}

export { HomeContainer };

