import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "10px 14px",
          background: "#FAFAFA",
          border: "2px solid #E5E5E5",
          borderRadius: "5px",
          "&:hover": {
            border: "2px solid #008ad9",
          },
          "&:focus": {
            border: "2px solid #008ad9",
            outline: "none",
          },
        },
      },
    },
  },
});
export default theme;
