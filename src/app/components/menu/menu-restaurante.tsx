import * as React from 'react';
import { MenuRestauranteStyled } from './menu-restaurante.styled';
import { Collapse } from '../common/collapse';
import { IGrupo } from '../../../meta-data/interfaces';

interface IMenuRestauranteProps {
   grupos: IGrupo[];
   toggleModal(nome: string): void;
}

const MenuRestaurante: React.StatelessComponent<IMenuRestauranteProps> = props => {
      return (
            <MenuRestauranteStyled>
                     {props.grupos.map((grupo, index) =>
                        <Collapse label={grupo.nome} key={index}>
                        <div className="container row-wrap">
                           {grupo.itens.map((item, index) => (
                              <span
                                 id='itens'
                                 key={index}
                                 onClick={() => props.toggleModal(item.name)}
                              >
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
                              </span>
                           ))}
                  </div>
                  </Collapse>
                  )}
            </MenuRestauranteStyled>
      );
};

export { MenuRestaurante };
