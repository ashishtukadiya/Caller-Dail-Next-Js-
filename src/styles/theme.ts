import { createTheme } from "@mui/material/styles";
import typography from "./typography";

let primary = " #848B91  !important";
let borderRadius = "0.5rem";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FA8832",
      dark: "#000",
      light: "#E7E6F0",
    },
    secondary: {
      main: "#2A8BCA",
      light: "#18A1CE",
      dark: "",
    },
    text: {
      primary: "#333",
      secondary: "#848B91",
      disabled: "",
    },
  },

  typography,
  components: {
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       // minWidth: "1409px",
    //       "@media (max-width: 600px)": {
    //         minWidth: "100%",
    //       },
    //       "@media (min-width: 600px) and (max-width: 960px)": {
    //         minWidth: "80%",
    //       },
    //       "@media (min-width: 960px) and (max-width: 1280px)": {
    //         minWidth: "60%",
    //       },
    //       "@media (min-width: 1280px) and (max-width: 1480px)": {
    //         minWidth: "40%",
    //       },
    //       "@media (min-width: 1920px) and (max-width: 2280px)": {
    //         minWidth: "90%",
    //       },
    //     },
    //   },
    // },
    MuiButton: {
      variants: [
        {
          props: { variant: "text", color: "primary" },
          style: {
            //  background: "#FA8832",
            background: "#FA8832 !important",
            color: "#ffffff",
            // borderRadius: "10px",
            // border: "thin solid #fff",
            padding: "8px 10px",
            // "@media (max-width: 1660px)": {
            //   padding: "10px 12px",
            //   borderRadius: "10px",
            //   border: "thin solid #fff",
            // },
            // ":hover": {
            //   background: "#E3680C",
            //   backgroundColor: "#E3680C",
            //   border: "thin solid #fff",
            // },
          },
        },
        // {
        //   props: { variant: "outlined", color: "secondary" },
        //   style: {
        //     borderRadius: "3.5rem",
        //     background: "#2A8BCA",
        //     color: "#ffffff",
        //     padding: "20px 24px",
        //     border: "thin solid #fff",
        //     "@media (max-width: 1660px)": {
        //       padding: "10px 12px",
        //       borderRadius: "3.5rem",
        //       fontFamily: "Roboto-Regular",
        //       fontSize: "20px",
        //       fontStyle: "normal",
        //       fontWeight: "600",
        //       lineHheight: "26.91px",
        //     },
        //     ":hover": {
        //       background: "#2A8BCA",
        //       border: "thin solid #fff",
        //     },
        //   },
        // },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            // borderRadius: "3.5rem",
            background: "#ffffff !important",
            color: "#848B91  !important",
            padding: "8px 10px",
            // padding: "20px 24px",
            border: "thin solid #848B91 !important",
            // "@media (max-width: 1660px)": {
            //   padding: "10px 12px",
            //   borderRadius: "3.5rem",
            //   fontFamily: "Roboto-Regular",
            //   fontSize: "18px",
            //   fontStyle: "normal",
            //   fontWeight: "700",
            //   lineHheight: "normal",
            // },
          },
        },
        // {
        //   props: { variant: "text", color: "secondary" },
        //   style: {
        //     background: "rgba(255, 0, 0, 0)",
        //     color: "#ffffff",
        //     borderRadius: "1.5rem",
        //     padding: "20px 24px",
        //     "@media (max-width: 1660px)": {
        //       padding: "10px 12px",
        //       borderRadius: "1.5rem",
        //     },
        //     ":hover": {
        //       background: "rgba(255, 0, 0, 0)",
        //     },
        //   },
        // },
      ],
    },

    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       border: primary,
    //       borderRadius: borderRadius,
    //       height: "100% !important",
    //       fieldset: {
    //         borderColor: primary,
    //       },
    //       "input, fieldset,textarea": {
    //         fontSize: "1rem !important",
    //       },
    //     },
    //   },
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // height: "2.9rem",
          borderRadius: borderRadius,
          height: "100% !important",
          backgroundColor: "rgba(255, 255, 255, 0.5) !important",
          fieldset: {
            borderColor: primary,
          },
          "input, fieldset,textarea": {
            color: "#333 !important",
            fontFamily: "Syne",
            fontSize: "15px !important",
            fontWeight: "400 !important",
          },
          "&.Mui-readOnly fieldset": {
            border: "1px solid #DADADA !important",
          },
          "&.Mui-readOnly": {
            background: "white !important",
            boxShadow: "-2px 2px 12px 0px rgba(250, 136, 50, 0.10)",
            borderRadius: "10px",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          // color: "white",
          // background:
          //   "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 251, 248, 0.33)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFBF8",
          height: "2px",
          margin: "16px 0",
          borderColor: "#FFFBF8",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "1rem !important",
          background: "#FDAD6F !important",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#4F4F4F",
          fontSize: "1rem !important",
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          border: " 1px solid #FA8832",
          borderRadius: "10px",
        },
      },
    },
  },
});

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body4: true;
    para: true;
    para2: true;
    para3: true;
    para4: true;
    para5: true;
    para6: true;
    text: true;
    typography: true;
    caption1: true;
  }
}

export default theme;
