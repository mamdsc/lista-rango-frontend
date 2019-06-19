import * as React from 'react';
import { IRestaurante } from '../../meta-data/interfaces/Restaurante';
import { BuscaRestaurantes } from '../components/home/busca-restaurantes';
import { IHours } from '../../meta-data/interfaces/Hours';
import styled from 'styled-components';
import { LayoutStyled } from '../components/layout.styled';
import { ListaRestaurantes } from '../components/home/lista-restaurantes';
import { RestauranteService } from '../../services/restaurante-service';

interface IHomeContainerState {
   restaurantes: IRestaurante[],
   abertoAgora: boolean;
}

class HomeContainer extends React.Component<{}, IHomeContainerState> {

   public listaDeRestaurantes: IRestaurante[] = [];

   public constructor (props: {}) {
      super(props);
      this.state = {
         restaurantes: [],
         abertoAgora: false
      };
   }

   async componentDidMount() {
      this.obtemRestaurantes();
   }

   public obtemRestaurantes = async () => {
      try {
         const response = await RestauranteService.getRestaurantes();
         console.log(response);
         this.listaDeRestaurantes = response.data;

         let a = response.data;
         a.map(r => {
            const statusAgora = this.status(r.hours)
            return r.abertoAgora = statusAgora;
         })

         this.setState({
            restaurantes: a
         })
      } catch (err) {
         throw Error(`Request error. ->> ${err}`);
      }
   }

   public filtrarItens(nomeRestaurante: string) {
      const nomesRestaurantes = this.listaDeRestaurantes.map(r => r.name);
      return nomesRestaurantes.filter(function(el) {
            return el.toLowerCase().indexOf(nomeRestaurante.toLowerCase()) > -1;
      })
   }

   public aplicarFiltro = (nomeRestaurante: string) => {   
      if (!nomeRestaurante) {
         this.obtemRestaurantes();
      }
      
      const filtrados = this.filtrarItens(nomeRestaurante);

      let restaurantesFiltrados: IRestaurante[] = [];
      filtrados.map(t => 
         restaurantesFiltrados = this.listaDeRestaurantes.filter(restaurante => restaurante.name === t)
      );

      this.setState({
         restaurantes: restaurantesFiltrados
      })
   }

   public horaAberto = (from: string) => {
      let horaAbetura = new Date();
      const numberHour = parseInt(from);
      horaAbetura.setHours(numberHour);
      return horaAbetura.getTime();
   }
   
   public horaFechado = (to: string) => {
      let horaFecha = new Date();
      const numberHour = parseInt(to);
      horaFecha.setHours(numberHour);
      return horaFecha.getTime();
   }

   
   public status = (hours?: IHours[]): boolean => {
      let agora = new Date();
      let horaAtual = agora.getTime();
      let hoje = agora.getDay();
      
      if (!hours) return false;
      
      let aberto: boolean = false;
      hours.map(h => {
         if (this.horaAberto(h.from) < horaAtual && this.horaFechado(h.to) > horaAtual) {
            h.days.map(d => {
               if (d === hoje) {
                  return aberto = true;
               } else {
                  return aberto = false;
               }
            });
         } 
         return aberto = false;
      });
      
      return aberto;
   }

   public render(): JSX.Element {

      const { restaurantes } = this.state;

      return (
         <LayoutStyled>
            <HomeContainerStyled>
               <header/>
               <h1>Bem-vindo ao Lista Rango</h1>
               <BuscaRestaurantes aplicarFiltro={this.aplicarFiltro}/>
               <ListaRestaurantes restaurantes={restaurantes}/>
            </HomeContainerStyled>
         </LayoutStyled>
      );
   }
}

const HomeContainerStyled = styled.div`
h1 {
  margin-top: 90px;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: #404040;
  font-size: 24px;
  font-weight: normal;
}`;

export { HomeContainer };

