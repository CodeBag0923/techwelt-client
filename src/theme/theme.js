// Lighter Paper: #ffffff
// Light Paper: #e5e5e5
// Accent 1: #2196f3
// Dark Paper: #171c34
// Dark Modals: #151b24
// Darkest Paper: #151318


import { createTheme } from '@mui/material/styles';

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
const themeConstants = {
  breakpoints: {
    xs: 0,
    mb: 350,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,

    button: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.375,
      letterSpacing: "0.00938em",
      paddingBottom: "4px",
      paddingTop: "7px",
    },
    subtitle2: {
      fontWeight: 100,
      fontSize: "0.9rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.65rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: { fontSize: "2.125rem", lineHeight: 1.8, letterSpacing: "0.00735em" },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
        // disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: 8,
          // padding: '0.5rem 1rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
          "& *": {
            "::-webkit-scrollbar": { width: "5px" },
            "::-webkit-scrollbar-track": { 
             background: "#ffffff00", 
             margin: '1.5rem 0rem 0rem 0rem' 
            },
            "::-webkit-scrollbar-thumb": { background: "#11CEFA" },
            "::-webkit-scrollbar-thumb:hover": { background: "#2196f3" },
          },
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
      },
    },
  },
};

// Check here for more configurations https://material-ui.com/customization/default-theme/
export const _lightTheme = createTheme({
  palette: {
    mode: "light",
    common: { black: "#0C0C1F", white: "#fff" },
    background: {
      paper: "#fff",
      default: "#e5e5e5",
    },
    success: {
      main: "#11CEFA",
    },
    text: {
      primary: "#0C0C1F",
      disabled: "#B1B5B9",
    },
    primary: {
      main: "#2196F3",
      light: "#2196F3",
      dark: "#2196F3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#006494",
      light: "#0d99ff",
      dark: "#004262",
      contrastText: "#fff",
    },

    // divider: '#E4E7E8',
    divider: "#d5d5d5",
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
  },
  // breakpoints: {
  // 	values: themeConstants.breakpoints,
  // },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,

    button: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    subtitle1: {
      color: "#000",
      fontFamily: "Poppins",
      fontWeight: 1000,
      fontSize: "1.1rem",
      lineHeight: 1.375,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      color: "#2D3748",
      fontWeight: 100,
      fontSize: "0.9rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.65rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      color: "#1C0C37",
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.8,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
        // disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: 8,
          Color: "#171c34",
          // padding: '0.5rem 1rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
          "& *": {
            "::-webkit-scrollbar": { width: "5px" },
            "::-webkit-scrollbar-track": {
              background: "#ffffff00",
              margin: "1.5rem 0rem 0rem 0rem",
            },
            "::-webkit-scrollbar-thumb": { background: "#11CEFA" },
            "::-webkit-scrollbar-thumb:hover": { background: "#fb866e" },
          },
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
      },
    },
  },
});
export const _darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#0e0c13b8",
      default: "#111133",
    },
    text: {
      primary: "#0C0C1F",
      disabled: "#B1B5B9",
    },
    primary: {
      main: "#2196F3",
      light: "#fb866e",
      dark: "#2196F3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#006494",
      light: "#0d99ff",
      dark: "#004262",
      contrastText: "#fff",
    },
    success: {
      main: "#11CEFA",
    },

    // divider: '#E4E7E8',
    divider: "#d5d5d5",
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
  },
  // breakpoints: {
  // 	values: themeConstants.breakpoints,
  // },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,

    button: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    subtitle1: {
      color: "#000",
      fontFamily: "Poppins",
      fontWeight: 1000,
      fontSize: "1.1rem",
      lineHeight: 1.375,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      color: "#2D3748",
      fontWeight: 700,
      fontSize: "0.9rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.65rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      color: "#1C0C37",
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.8,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
        // disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: 8,
          // padding: '0.5rem 1rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
          "& *": {
            "::-webkit-scrollbar": { width: "5px" },
            "::-webkit-scrollbar-track": {
              background: "#ffffff00",
              margin: "1.5rem 0rem 0rem 0rem",
            },
            "::-webkit-scrollbar-thumb": { background: "#11CEFA" },
            "::-webkit-scrollbar-thumb:hover": { background: "#fb866e" },
          },
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
      },
    },
  },
});


export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#fff",
      default: "#e5e5e5",
    },
    success: {
      main: "#11CEFA",
    },
    text: {
      primary: "#0C0C1F",
      disabled: "#B1B5B9",
    },
    primary: {
      main: "#2196F3",
      light: "#2196F3",
      dark: "#2196F3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2196F3",
      light: "#2196F3",
      dark: "#2196F3",
      contrastText: "#fff",
    },
  },
  typography: themeConstants.typography,
  components: themeConstants.components,
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#0e0c13b8",
      default: "#0C0C1F",
    },
    text: {
      primary: "#FEFEFD",
      disabled: "#B1B5B9",
    },
    primary: {
      main: "#2196F3",
      light: "#fb866e",
      dark: "#2196F3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2196F3",
      light: "#2196F3",
      dark: "#2196F3",
      contrastText: "#fff",
    },
    success: {
      main: "#11CEFA",
    },
  },
  typography: themeConstants.typography,
  components: themeConstants.components,
});