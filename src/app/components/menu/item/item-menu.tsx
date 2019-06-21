import * as React from 'react';
import { ItemMenuStyled } from './item-menu.styled';
import { IMenu } from '../../../../meta-data/interfaces';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../theme/default';

interface IItemMenuProps {
   item: IMenu;
   closeModal(): void;
}

class ItemMenu extends React.Component<IItemMenuProps> {

   public render(): JSX.Element {
      const { item } = this.props;
      return (
         <ThemeProvider theme={theme}>
            <ItemMenuStyled>
               <div id='modal'>
                  <div id='modal-content'>
                     <button id='close' onClick={this.props.closeModal}>{'X'}</button>
                     <img src={item.image} alt={item.name}/>
                     <h1>{item.name}</h1>
                     <div id='info'>
                        <p>
                           {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        </p>
                        <div id='price'>
                           {item.price && item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </div>
                     </div>
                  </div>
               </div>
            </ItemMenuStyled>
         </ThemeProvider>
      );
      }
}

export { ItemMenu };