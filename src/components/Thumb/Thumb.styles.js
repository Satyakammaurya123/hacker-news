import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const Content = styled.div`
    font-size: small;
`;
