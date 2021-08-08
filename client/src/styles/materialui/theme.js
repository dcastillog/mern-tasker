const { createMuiTheme } = require('@material-ui/core');

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Segoe UI'].join(','),
    button: {
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: '600',
    },
  },
});

export default theme;
