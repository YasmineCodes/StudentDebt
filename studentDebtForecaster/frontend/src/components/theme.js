import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans Condensed',
      'sans-serif',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme; 