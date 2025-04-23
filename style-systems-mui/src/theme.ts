import { createTheme } from '@mui/material/styles';

// Color definitions from colorsPalettes
const colors = {
  blue: {
    50: '#F5F8FF',
    75: '#ECF1FF',
    100: '#E3EBFF',
    200: '#B8CCFE',
    300: '#94B2FE',
    350: '#6B95FF',
    400: '#3E74FE',
    500: '#195AFE',
    600: '#0534AC',
  },
  carbon: {
    0: '#FFFFFF',
    25: '#F7F7F8',
    50: '#E6E9EC',
    100: '#CBD1D7',
    200: '#B5BEC6',
    250: '#8995A1',
    300: '#6B7C8C',
    400: '#3A5166',
    500: '#092540',
  },
  red: {
    100: '#FFE6E6',
    200: '#FFC9C9',
    300: '#FCAAA5',
    350: '#F48080',
    400: '#E95F5F',
    500: '#BB3F3F',
    s100: '#FF442D',
  },
  green: {
    100: '#DDFFD4',
    200: '#BDF0AF',
    300: '#A5E593',
    400: '#8ACD77',
    500: '#70AF5F',
    s100: '#4FBF40',
    g100: '#039A80',
  },
  orange: {
    100: '#FFEBDD',
    200: '#FFD1B0',
    300: '#FF9A47',
    400: '#FF7A1A',
    500: '#DE5D00',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      light: colors.blue[300],
      main: colors.blue[400],
      dark: colors.blue[600],
      contrastText: '#fff',
    },
    secondary: {
      light: colors.orange[300],
      main: colors.orange[400],
      dark: colors.orange[500],
      contrastText: '#fff',
    },
    error: {
      light: colors.red[300],
      main: colors.red[400],
      dark: colors.red[500],
      contrastText: '#fff',
    },
    success: {
      light: colors.green[300],
      main: colors.green[400],
      dark: colors.green[500],
      contrastText: '#fff',
    },
    grey: {
      50: colors.carbon[25],
      100: colors.carbon[50],
      200: colors.carbon[100],
      300: colors.carbon[200],
      400: colors.carbon[250],
      500: colors.carbon[300],
      600: colors.carbon[400],
      700: colors.carbon[500],
      A100: colors.carbon[50],
      A200: colors.carbon[100],
      A400: colors.carbon[300],
      A700: colors.carbon[500],
    },
    background: {
      default: colors.carbon[0],
      paper: colors.carbon[25],
    },
    text: {
      primary: colors.carbon[500],
      secondary: colors.carbon[300],
      disabled: colors.carbon[200],
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.carbon[0],
          color: colors.carbon[500],
        },
      },
    },
  },
}); 