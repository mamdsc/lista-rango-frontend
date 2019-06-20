import * as React from 'react';
import { IRestaurante, IHours } from '../../meta-data/interfaces';
import { LayoutStyled } from '../components/layout.styled';
import { ListaRestaurantes } from '../components/home/lista-restaurantes';
import { RestauranteService } from '../../services/restaurante-service';
import { Input } from '../components/common/input';
import { Loading } from '../components/common/loading';
import { HomeContainerStyled } from './home-container.styled';

interface IHomeContainerState {
   restaurantes: IRestaurante[],
   abertoAgora: boolean;
   isLoading: boolean;
}

class HomeContainer extends React.Component<{}, IHomeContainerState> {

   public listaDeRestaurantes: IRestaurante[] = [];

   public constructor (props: {}) {
      super(props);
      this.state = {
         restaurantes: [],
         abertoAgora: false,
         isLoading: false
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

         let a = response.data;
         a.map(r => {
            const statusAgora = this.status(r.hours)
            return r.abertoAgora = statusAgora;
         })

         this.setState({
            restaurantes: a
         })

         this.setLoading(false);
      } catch (err) {
         this.setLoading(false);
         throw Error(`Request error. ->> ${err}`);
      }
   }

   public filtrarItens(nomeRestaurante: string) {
      const nomesRestaurantes = this.listaDeRestaurantes.map(r => r.name);
      return nomesRestaurantes.filter((i) => {
         return i.toLowerCase().includes(nomeRestaurante.toLowerCase());
      })
   }

   public aplicarFiltro = (nomeRestaurante: string) => {   
      if (!nomeRestaurante) {
         this.obtemRestaurantes();
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

      const { restaurantes, isLoading } = this.state;

      return (
         <LayoutStyled>
            {isLoading ?
               <Loading/> :
               <HomeContainerStyled>
                  <header/>
                  <h1>Bem-vindo ao Lista Rango</h1>
                  <Input
                     aplicarFiltro={this.aplicarFiltro}
                     placeholder={'Buscar estabelecimento'}
                     marginTop={'30px'}
                     marginBottom={'40px'}
                  />
                  <ListaRestaurantes restaurantes={restaurantes}/>
               </HomeContainerStyled>
            }
         </LayoutStyled>
      );
   }
}

export { HomeContainer };

