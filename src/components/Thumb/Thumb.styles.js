import styled from "styled-components";

export const Wrapper = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
padding: 0 20px;

h3{
    color: var(--medGrey);
    padding: 0px;
    margin-top: 1rem;
    margin-bottom: 0px;
    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
    }
}
hr{
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #CCC, transparent);
}

`;

export const Content = styled.div`
    font-size: small;
    color: var(--lightGrey);



`;
