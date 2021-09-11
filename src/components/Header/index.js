import React from 'react';

import HNLogo from '../../images/Hacker-News-logo.png'

import { Wrapper, Content, LogoImg} from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={HNLogo} alt='hn-logo' />
    </Content>
  </Wrapper>
);

export default Header;
