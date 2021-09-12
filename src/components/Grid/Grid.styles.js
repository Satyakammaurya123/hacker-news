import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Wrapper = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
padding: 0 20px;

h1{
    color: var(--medGrey);
    @media screen and (max-width: 768px) {
        font-size: var(--fontBig);
    }
}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
