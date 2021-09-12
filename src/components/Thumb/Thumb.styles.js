import styled from "styled-components";

export const Wrapper = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
padding: 0 20px;

h2{
    color: var(--medGrey);
    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
    }
}
`;

export const Content = styled.div`
    font-size: smaller;
`;
