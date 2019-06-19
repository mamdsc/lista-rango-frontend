import * as React from 'react';
import { IRestaurante } from '../../../meta-data/interfaces/Restaurante';
import { DetalhesRestauranteStyled } from './detalhes-restaurante.styled';

interface IDetalhesRestauranteProps {
   restaurante: IRestaurante;
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

      const { restaurante } = this.props;
         
      restaurante.hours && restaurante.hours.map(h => 
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
   
   const { restaurante } = this.props;
   
   return (
      <DetalhesRestauranteStyled>
            <div id='infos'>
               <img src={restaurante.image} alt={restaurante.name}/>
               <h1>{restaurante.name}</h1>
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
      </DetalhesRestauranteStyled>
   );
   }
}

export { DetalhesRestaurante };
