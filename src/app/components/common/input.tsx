import * as React from 'react';
import { InputStyled } from './input.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/default';

interface IInputProps {
   aplicarFiltro(nomeFiltro: string): void;
   width?: string;
   marginTop?: string;
   marginBottom?: string;
   placeholder?: string;
}

interface IInputState {
   nomeFiltro: string;
}

class Input extends React.Component<IInputProps, IInputState> {
   
   public static defaultProps = {
      width: '700px',
      marginBottom: '00px',
      marginTop: '0px',
      placeholder: 'Buscar'
   }

   public constructor(props: IInputProps) {
      super(props);
      this.state = {
         nomeFiltro: ''
      }
   }

   public onChangeInputBusca = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
         nomeFiltro: e.target.value
      })
   }

   public onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.keyCode === 13) {
         const { aplicarFiltro } = this.props;
         const { nomeFiltro } = this.state;
         aplicarFiltro(nomeFiltro);
      }
   }

   public render(): JSX.Element {

      const { nomeFiltro } = this.state;
      const { marginBottom, marginTop, width, placeholder } = this.props;

      return (
         <ThemeProvider theme={theme}>
            <InputStyled width={width} marginBottom={marginBottom} marginTop={marginTop}>
               <input
                  title={'Digite e pressione a tecla enter'}
                  type='text'
                  placeholder={placeholder}
                  value={nomeFiltro ? nomeFiltro : ''}
                  onChange={this.onChangeInputBusca}
                  onKeyDown={this.onKeyDownInput}
               />
            </InputStyled>
         </ThemeProvider>
      );
   }
}

export { Input };
