import * as React from 'react';
import { MenuRestauranteStyled } from './menu-restaurante.styled';
import { Collapse } from '../common/collapse';
import { IGrupo } from '../../../meta-data/interfaces';

interface IMenuRestauranteProps {
   grupos: IGrupo[];
}

const MenuRestaurante: React.StatelessComponent<IMenuRestauranteProps> = props => {
      return (
            <MenuRestauranteStyled>
                     {props.grupos.map(grupo =>
                        <Collapse label={grupo.nome}>
                        <div className="container row-wrap">
                           {grupo.itens.map((item, index) => (
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
                  </Collapse>
                  )}
            </MenuRestauranteStyled>
      );
};

export { MenuRestaurante };
