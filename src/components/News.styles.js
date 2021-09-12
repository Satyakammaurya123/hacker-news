import styled from "styled-components";

export const Wrapper = styled.div`
max-width: var(--maxWidth);
align-items: center;
li{
    color: var(--medGrey);
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 0.8rem;
    /* border-bottom: solid 2px var(--lightGrey); */
    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
    }
}
hr{
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #CCC, transparent);
}
h3{
    color: var(--medGrey);
    padding: 0px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
    }
}
`;