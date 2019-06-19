import * as React from 'react';
import { BuscaRestaurantesStyled } from './busca-restaurantes.styled';

interface IBuscaRestaurantesProps {
   aplicarFiltro(nomeRestaurante: string): void;
}

interface IBuscaRestaurantesState {
   nomeRestaurante: string;
}

class BuscaRestaurantes extends React.Component<IBuscaRestaurantesProps, IBuscaRestaurantesState> {
   
   public constructor(props: IBuscaRestaurantesProps) {
      super(props);
      this.state = {
         nomeRestaurante: ''
      }
   }

   public onChangeInputBusca = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
         nomeRestaurante: e.target.value
      })
   }

   public onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.keyCode === 13) {
         const { aplicarFiltro } = this.props;
         const { nomeRestaurante } = this.state;
         aplicarFiltro(nomeRestaurante);
      }
   }

   public render(): JSX.Element {
      const { nomeRestaurante } = this.state;
      return (
         <BuscaRestaurantesStyled>
            <input
               type='text'
               placeholder='Buscar estabelecimento'
               value={nomeRestaurante ? nomeRestaurante : ''}
               onChange={this.onChangeInputBusca}
               onKeyDown={this.onKeyDownInput}
            />
         </BuscaRestaurantesStyled>
      );
   }
}

export { BuscaRestaurantes };
