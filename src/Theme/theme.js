import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
