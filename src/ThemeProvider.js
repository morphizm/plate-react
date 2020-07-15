import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MUIThemeProvider, StylesProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import { create } from 'jss';
// import preset from 'jss-preset-default';

// const jss = create(preset());

const ThemeProvider = ({ children }) => {
  const theme = createMuiTheme({});
  return (
    <StylesProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StylesProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
