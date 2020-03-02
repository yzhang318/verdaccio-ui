import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import defaultTheme from './themes/default';
import darkTheme from './themes/dark';
import { ColorsTheme } from './types';

function getThemeColors() {
  // eslint-disable-next-line no-constant-condition
  if (false) {
    return defaultTheme;
  } else {
    return darkTheme;
  }
}

export type Colors = ColorsTheme;

const padding = {
  light: '16px',
  regular: '24px',
};

const fontSize = {
  xxl: 26,
  xl: 24,
  lg: 21,
  md: 18,
  default: 16,
  sm: 14,
};

export type FontSize = keyof typeof fontSize;

const fontWeight = {
  light: 300,
  regular: 400,
  semiBold: 500,
  bold: 700,
};

export type FontWeight = keyof typeof fontWeight;

export const breakPoints = {
  small: 576,
  medium: 768,
  large: 1024,
  container: 1240,
  xlarge: 1275,
};

export type BreakPoints = typeof breakPoints;

const customizedTheme = {
  fontSize,
  fontWeight,
  breakPoints,
};

type CustomizedTheme = typeof customizedTheme;

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    ...getThemeColors(),
    primary: { main: getThemeColors().primary },
    secondary: { main: getThemeColors().secondary },
    error: { main: getThemeColors().red },
  },
  ...customizedTheme,
});

export type Theme = typeof theme;

declare module '@material-ui/core/styles/createMuiTheme' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Theme extends CustomizedTheme {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface ThemeOptions extends CustomizedTheme {}
}

declare module '@material-ui/core/styles/createPalette' {
  interface CustomPalette {
    black: string;
    white: string;
    red: string;
    orange: string;
    greySuperLight: string;
    greyLight: string;
    greyLight2: string;
    greyLight3: string;
    greyDark: string;
    greyDark2: string;
    greyChateau: string;
    greyGainsboro: string;
    greyAthens: string;
    eclipse: string;
    paleNavy: string;
    saltpan: string;
    snow: string;
    love: string;
    nobel01: string;
    nobel02: string;
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Palette extends CustomPalette {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface PaletteOptions extends Partial<CustomPalette> {}
}

export default { ...theme };
