import * as React from 'react';
import { Restaurante } from '../../../meta-data/interfaces/Restaurante';
import { DetalhesRestauranteStyled } from './detalhes-restaurante.styled';
import { Hours } from '../../../meta-data/interfaces/Hours';

interface IDetalhesRestauranteProps {
   restaurante: Restaurante[];
}

class DetalhesRestaurante extends React.Component<IDetalhesRestauranteProps> {

   public testando: string = '';
   public testando1: string = '';
   public testando2: string = '';

   public constructor(props: IDetalhesRestauranteProps) {
      super(props);
   }

   componentDidMount() {
      this.teste();
   }

   public diasDaSemana = (days: number): string => {
      switch (days) {
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
   
   public teste = (): string => {
      let days: number[] = [];
      let a: string = '';
      let hours: any = [];
      
      console.log(this.props.restaurante);

      hours = this.props.restaurante.map(x =>
         x.hours && console.log('h', x.hours)
      );
         
      hours.map((h: Hours) => 
         days = h.days
      );

      days.map(d => 
         a = this.diasDaSemana(d)
      );
      console.log('a', hours);
      
      let b: string = '';
      if (a === 'Segunda' || a === 'Terça' || a === 'Quarta' || a === 'Quinta' || a === 'Sexta'){
         this.testando = 'Segunda a Terça'
      } else if (a === 'Sábado') {
         this.testando1 = 'Sábado'
      } else {
         this.testando2 = 'Domingos e Feriados'
      }
      return b;
   }
   
   public horas = (from: string, to: string): string => {
      const f = from;
      const t = to;
   
      let g: string = '';
      if (f === from && t === to) {
         g = `${f + 'as' + t}`;
      }
   
      return g;
   }

   public render(): JSX.Element {
   return (
      <DetalhesRestauranteStyled>
         {this.props.restaurante.map((info, index) => (
            <div id='infos' key={index}>
               <img src={info.image} alt={info.name}/>
               <h1>{info.name}</h1>
               <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
               <p>{this.testando}</p>
               <p>{this.testando1}</p>
               <p>{this.testando2}</p>
               {/* {info.hours && info.hours.map(h => (
                  h.days.map((d, index )=> (
                     <span key={index}>
                        <p>{this.testando}</p>
                        <p>{horas(h.from, h.to)}</p>
                     </span>
                  ))
               ))} */}
            </div>
         ))}
      </DetalhesRestauranteStyled>
   );
   }
}

export { DetalhesRestaurante };
