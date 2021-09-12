import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <Link to='/'>
      <span>Top</span>
      </Link>
      <span>New</span>
      <span>Show</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
