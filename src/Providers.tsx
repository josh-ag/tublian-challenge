import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";

// Extend theme
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  base: "0em", // 0px
  sm: "390px", // ~480px.
  md: "48em", //  ~768px
  lg: "1024px",
  xl: "1200px",
  "2xl": "1440px",
};

// @fonts config
const fonts = {
  body: "Space Grotesk Variable",
  heading: "Space Grotesk Variable",
};

// @colors
const colors = {
  primary: "#FDD649",
  white: "#FEFEFE",
  disabled: "#696969",
  brand: {
    900: "#fdcb1a",
    800: "#fdd649",
    700: "#fee17f",
  },
};

export const theme = extendTheme({ config, colors, fonts, breakpoints });

export const ThemeProvider = ({ children }: any) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export const Providers = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};
