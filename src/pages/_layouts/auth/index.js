import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import GlobalStyle from '../../../styles/loginStyles';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
