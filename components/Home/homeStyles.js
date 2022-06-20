import styled from "styled-components";

export const PageContainer = styled.div`
position:relative;
display:flex;
width:100%;
padding-top: 70px;
min-height:100vh;
background-color:wheat;
`;

export const PridejPsa = styled.div`
display:grid;
width:80%;
max-width:1200px;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-row:40px;
margin-top: 10px;
grid-template-areas:
    'jmeno rasa zvuk tlacitko';
background-color:red;
`;

export const PridejPsaDetail = styled.div`
    
    &:nth-child(1){

    }
`;