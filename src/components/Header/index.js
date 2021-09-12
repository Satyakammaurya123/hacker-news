import React from 'react';
import { Link } from 'react-router-dom';
import HNLogo from '../../images/Hacker-News-logo.png'

import { Wrapper, Content, LogoImg} from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
    <Link to='/'>
      <LogoImg src={HNLogo} alt='hn-logo' />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
