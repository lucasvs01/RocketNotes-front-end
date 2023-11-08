import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100%;

    display: grid;


    grid-template-rows: 105px auto;
    grid-template-areas: 'header' 
    'content';

    > main {
        grid-area: content;
        overflow-y: scroll;
    }


`

export const Links = styled.ul`
    list-style: none;
     
    > li {

        margin-top: 12px;

        a {
           color: ${({theme}) => theme.COLORS.WHITE}

        }
    }
` 

export const Content = styled.div`

    max-width: 550px;
    margin: 65px auto 93px;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }


    > h1 {
        font-size: 36px;
        font-weight: 500;
        margin: 64px 0 16px;

    }

    > p{
        text-align: justify;
        font-size: 16px;
        font-weight: 400;


    }

`;