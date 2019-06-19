import styled from "styled-components";

const DetalhesRestauranteStyled = styled.div`
margin-top: 90px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
 
img {
   width: 100px;
   height: 100px;
   float: left;
   margin-right: 21px;
   margin-top: 25px;
}

h1 {
   font-size: 24px;
}

p {
   font-size: 16px;
   width: 529px;
}

#infos {
   width: 695px;
   height: 145px;
   padding-left: 180px;
}

span {
   flex-direction: row;
   display: flex;
}
`;

export { DetalhesRestauranteStyled };