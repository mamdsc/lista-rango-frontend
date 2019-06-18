import * as React from 'react';
import { Restaurante } from '../../meta-data/interfaces/Restaurante';
import { ListaRestaurantesStyled } from './lista-restaurantes.styled';
import { Link } from 'react-router-dom';

interface IListaRestaurantesProps {
   restaurantes: Restaurante[]
}

const ListaRestaurantes: React.FunctionComponent<IListaRestaurantesProps> = props => {
   return (
      <div style={{display: 'flex'}}>
         {props.restaurantes.map(restaurante => (
         <ListaRestaurantesStyled key={restaurante.id} abertoAgora={restaurante.abertoAgora}>
            <ul>
               <Link id='link' to={`/cardapio/${restaurante.id}`}>
                  <li key={restaurante.id}>
                     <div id='hours'>
                        {restaurante.abertoAgora ? 'Aberto agora' : 'Fechado'}
                     </div>
                     <img src={restaurante.image} alt={restaurante.name}/>
                     <div id='infos'>
                        <span id='name'>{restaurante.name}</span><br/>
                        <span id='address'>{restaurante.address}</span>
                     </div>
                  </li>
               </Link>
            </ul>
         </ListaRestaurantesStyled>
         ))}
      </div>
  );
};

ListaRestaurantes.defaultProps = {
   restaurantes: []
}
export { ListaRestaurantes };

