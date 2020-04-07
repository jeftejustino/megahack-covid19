import React from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Header from '../../../components/Header';
import { Wrapper, Container } from './styles';
import GlobalStyle from './blueStyles';

export default function DefaultLayout({ children }) {
  const location = useLocation();

  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: blue,
    },
    status: {
      danger: 'red',
    },
  });
  return (
    <Wrapper>
      {(location.pathname === '/contact/new/single' ||
        location.pathname === '/contact/edit') && <GlobalStyle />}

      <Header props={children} />
      <ThemeProvider theme={theme}>
        <Container>{children}</Container>
      </ThemeProvider>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
