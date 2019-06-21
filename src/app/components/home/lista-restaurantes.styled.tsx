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

#infos {
   padding: 30px;
   margin-left: 90px;
}

#itens {
   box-shadow: 0px 2px 4px rgba(0,0,0,0.16);
   border-radius: 4px;
   height: 100px;
   width: 367px;
   margin-bottom: 14px;
}

#hours {
   width: 50px;
   height: 50px;
   line-height: 50px;
   border-radius: 50%;
   background: ${p => p.abertoAgora ? p.theme.colors.darkPurple : p.theme.colors.lightPurple};
   float: right;
   font-size: 10px;
   color: ${p => p.theme.colors.white};
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
   color: ${p => p.theme.colors.gray};
   margin: 10px;
}

#flex-container {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
}
 
#flex-container > div {
   margin: 10px;
}
`; 

export { ListaRestaurantesStyled };