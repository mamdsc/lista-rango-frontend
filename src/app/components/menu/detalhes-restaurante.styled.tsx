import styled from "styled-components";

const DetalhesRestauranteStyled = styled.div`
margin-top: 90px;
display: flex;
text-align: left;

#detalhes {
   height: 145px;
}

img {
   margin-top: 20px;
   width: 120px;
   height: 120px;
   float: left;
   margin-left: 10px;
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
   font-size: 12px;
}

#hours {
   font-weight: bold;
   margin-left: 5px;
}
`;

export { DetalhesRestauranteStyled };