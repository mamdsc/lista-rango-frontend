import * as React from 'react';
import { ListaRestaurantesStyled } from './lista-restaurantes.styled';
import { Link } from 'react-router-dom';
import { IRestaurante } from '../../../meta-data/interfaces';

interface IListaRestaurantesProps {
   restaurantes: IRestaurante[]
}

const ListaRestaurantes: React.FunctionComponent<IListaRestaurantesProps> = props => {
   return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
         {props.restaurantes.map(restaurante => (
         <ListaRestaurantesStyled key={restaurante.id} abertoAgora={restaurante.abertoAgora}>
            <div className="flex-container">
               <Link id='link' to={`/menu/${restaurante.id}`}>
                  <div id='itens' key={restaurante.id}>
                     <div id='hours'>
                        {restaurante.abertoAgora ? 'Aberto agora' : 'Fechado'}
                     </div>
                     <img src={restaurante.image} alt={restaurante.name}/>
                     <div id='infos'>
                        <span id='name'>{restaurante.name}</span><br/>
                        <span id='address'>{restaurante.address}</span>
                     </div>
                  </div>
               </Link>
            </div>
         </ListaRestaurantesStyled>
         ))}
      </div>
  );
};

ListaRestaurantes.defaultProps = {
   restaurantes: []
}
export { ListaRestaurantes };

