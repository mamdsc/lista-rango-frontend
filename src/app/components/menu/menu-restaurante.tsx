import * as React from 'react';
import { IMenu } from '../../../meta-data/interfaces/Menu';
import { MenuRestauranteStyled } from './menu-restaurante.styled';

interface IMenuRestauranteProps {
   menu: IMenu[];
}

const MenuRestaurante: React.StatelessComponent<IMenuRestauranteProps> = props => {
      return (
            <MenuRestauranteStyled>
            <div className="container row-wrap">
               {props.menu.map((item, index) => (
                  <div id='itens' key={index}>
                     <img src={item.image} alt={item.name}/>
                     <div id='infos'>
                        <span id='name'>
                           {item.name}
                        </span><br/>
                        <span id='descricao'>
                           {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}
                        </span><br/>
                        <span id='price'>
                           {item.price && item.price.toLocaleString('pt-br',
                           {style: 'currency', currency: 'BRL'})}
                        </span>
                     </div>
                  </div>
               ))}
               </div>
            </MenuRestauranteStyled>
      );
};

export { MenuRestaurante };
