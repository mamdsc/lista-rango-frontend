import * as React from 'react';
import { IRestaurante } from '../../../meta-data/interfaces/Restaurante';
import { DetalhesRestauranteStyled } from './detalhes-restaurante.styled';

interface IDetalhesRestauranteProps {
   restaurante: IRestaurante;
}

const diasDaSemana = (days: number): string => {
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

const primeiro = (days: number[]): string => {
   const primeiro = diasDaSemana(days[ 0 ]);
   return primeiro;
}

const ultimo = (days: number[]): string => {
   const ultimo = diasDaSemana(days[days.length - 1]);
   return ultimo;
}

const DetalhesRestaurante: React.StatelessComponent<IDetalhesRestauranteProps> = props => {
   return (
      <div>
      <DetalhesRestauranteStyled>
         <div id='detalhes'>
            <img src={props.restaurante.image} alt={props.restaurante.name}/>
            <div id='infos'>
               <h1>{props.restaurante.name}</h1>
               <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
               <p>{props.restaurante.hours && props.restaurante.hours.map((h, index) =>
                  <span key={index}>
                     <span>{primeiro(h.days)} á {ultimo(h.days)}</span>
                     <span id='hours'>{h.from} às {h.to}</span>
                  </span>
               )}
               </p>
            </div>
         </div>
      </DetalhesRestauranteStyled>
      </div>
   );
};

export { DetalhesRestaurante };
