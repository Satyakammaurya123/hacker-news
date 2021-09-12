import styled from "styled-components";

export const Wrapper = styled.div`
max-width: var(--maxWidth);

li{
    color: var(--medGrey);
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 0.8rem;
    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
    }
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