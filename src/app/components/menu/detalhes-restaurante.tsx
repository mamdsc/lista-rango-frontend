import * as React from 'react';
import { IRestaurante } from '../../../meta-data/interfaces';
import { DetalhesRestauranteStyled } from './detalhes-restaurante.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/default';

interface IDetalhesRestauranteProps {
   restaurante: IRestaurante;
   primeiroDiaDaSemana(dias: number[]): string;
   ultimoDiaDaSemana(dias: number[]): string;
}

const DetalhesRestaurante: React.StatelessComponent<IDetalhesRestauranteProps> = props => {
   return (
      <ThemeProvider theme={theme}>
         <DetalhesRestauranteStyled>
            <div id='detalhes'>
               <img src={props.restaurante.image} alt={props.restaurante.name}/>
               <div id='infos'>
                  <h1>{props.restaurante.name}</h1>
                  <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
                  <p>{props.restaurante.hours && props.restaurante.hours.map((h, index) =>
                     <span key={index}>
                        <span>
                           {props.primeiroDiaDaSemana(h.days)} á {props.ultimoDiaDaSemana(h.days)}
                        </span>
                        <span id='hours'>{h.from} às {h.to}</span>
                     </span>
                  )}
                  </p>
               </div>
            </div>
         </DetalhesRestauranteStyled>
      </ThemeProvider>
   );
};

export { DetalhesRestaurante };
