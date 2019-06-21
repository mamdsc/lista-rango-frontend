import styled from 'styled-components';

const MenuRestauranteStyled = styled.span`

img {
   width: 115px;
   height: 115px;
   position: absolute;
}

#itens {
   box-shadow: 0px 2px 4px rgba(0,0,0,0.16);
   border-radius: 4px;
   height: 115px;
   width: 366px;
   margin: 5px;
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
   flex-flow: row wrap;
   justify-content: center;
}
 
.flex-container > div {
   margin: 10px;
}

.row-wrap {
	flex-flow: row wrap;
}

.container {
	max-width: 900px;
   margin: 0 auto;
   justify-content: center;
   display: flex;
}

.item {
	flex: 1;
	margin: 15px;
}
`; 

export { MenuRestauranteStyled };