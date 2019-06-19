import styled from 'styled-components';

const MenuRestauranteStyled = styled.div`

img {
   width: 115px;
   height: 115px;
   position: absolute;
}

#itens {
   box-shadow: 0px 2px 4px #000000;
   border-radius: 4px;
   height: 115px;
   width: 386px;
}

#infos {
   padding-left: 20px;
   margin-left: 110px;
}

#price {
   font-size: 16px;
   color: #009CA3;
   line-height: 30px;
}

#name {
   font-size: 16px;
   line-height: 30px;
}

#descricao {
   font-size: 12px;
}

.flex-container {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
 }
 
 .flex-container > div {
   margin: 10px;
 }
`; 

export { MenuRestauranteStyled };