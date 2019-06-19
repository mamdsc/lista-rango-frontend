import * as React from 'react';
import { InputStyled } from './input.styled';

interface IInputProps {
   aplicarFiltro(nomeFiltro: string): void;
   width?: string;
   margin?: string;
   placeholder?: string;
}

interface IInputState {
   nomeFiltro: string;
}

class Input extends React.Component<IInputProps, IInputState> {
   
   public static defaultProps = {
      width: '700px',
      margin: '50px',
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
      const { margin, width, placeholder } = this.props;

      return (
         <InputStyled width={width} margin={margin}>
            <input
               type='text'
               placeholder={placeholder}
               value={nomeFiltro ? nomeFiltro : ''}
               onChange={this.onChangeInputBusca}
               onKeyDown={this.onKeyDownInput}
            />
         </InputStyled>
      );
   }
}

export { Input };
