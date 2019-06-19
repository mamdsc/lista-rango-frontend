import styled from 'styled-components';

interface IListaRestaurantesStyledProps {
   abertoAgora: boolean
}

const ListaRestaurantesStyled = styled.span<IListaRestaurantesStyledProps>`

img {
   width: 100px;
   height: 100px;
   position: absolute;
}

li {
   width: 400px;
   height: 100px;
   box-shadow: 0px 2px 4px #000000;
   margin-bottom: 40px;
   border-radius: 4px;
}

ul {
   list-style: none;
}

#infos {
   padding: 30px;
   margin-left: 90px;
}

#hours {
   width: 50px;
   height: 50px;
   line-height: 50px;
   border-radius: 50%;
   background: ${props => props.abertoAgora ? '#2B0D61' : '#B5ABD4'};
   float: right;
   font-size: 10px;
   color: #fff;
   text-align: center;
   font-weight: bold;
   align-items: center;
   margin-top: -25px;
}

#address {
   font-size: 12px;
}

#name {
   font-size: 16px;
}

#link {
   text-decoration: none;
   color: #404040;
}
`; 

export { ListaRestaurantesStyled };