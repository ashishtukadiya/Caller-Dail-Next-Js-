// ----------------------------------------------------------------------

import { TypographyOptions } from "@mui/material/styles/createTypography";

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

interface fontsize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export function responsiveFontSizes({ xs, sm, md, lg }: fontsize) {
  return {
    "@media (min-width:400px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Roboto, Roboto-Medium"; // Google Font
// const FONT_PRIMARY = "CircularStd, sans-serif"; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  letterSpacing: 0.8,
  h1: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    fontSize: pxToRem(36),
    ...responsiveFontSizes({ xs: 8, sm: 10, md: 25, lg: 36 }),
  },
  h2: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    fontSize: pxToRem(30),
    ...responsiveFontSizes({ xs: 15, sm: 16, md: 25, lg: 30 }),
  },
  h3: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px",
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 14, sm: 10, md: 16, lg: 18 }),
  },
  h4: {
    fontFamily: "Syne",
    fontWeight: 600,
    lineHeight: "24px",
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ xs: 20, sm: 10, md: 22, lg: 22 }),
  },
  h5: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: pxToRem(21),
    ...responsiveFontSizes({ xs: 14, sm: 16, md: 18, lg: 20 }),
  },
  h6: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "30px",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 10, sm: 12, md: 13, lg: 15 }),
  },
  subtitle1: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 12, sm: 14, md: 14, lg: 16 }),
  },
  subtitle2: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 12, lg: 16 }),
  },

  body1: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 18, lg: 20 }),
  },
  body2: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "20px",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 16, lg: 20 }),
  },

  body3: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 10, sm: 10, md: 12, lg: 14 }),
  },
  typography: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "noraml",
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 12, lg: 14 }),
  },
  caption: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "22px",
    fontSize: pxToRem(15),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 12, lg: 14 }),
  },
  overline: {
    fontFamily: "Syne",
    fontWeight: 400,
    lineHeight: "21px",
    fontSize: pxToRem(14),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: "Syne",
    fontWeight: 700,
    lineHeight: 24 / 14,
    letterSpacing: 0.8,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

export default typography as TypographyOptions;
