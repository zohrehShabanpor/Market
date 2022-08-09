import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { theme } from ".";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      white: string;
      black: string;
      sunRay: {
        "100": string;
        "80": string;
        "60": string;
        "40": string;
        "20": string;
      };
      blueDeFrance: {
        "100": string;
        "90": string;
        "80": string;
        "60": string;
        "40": string;
        "20": string;
      };
      coralRed: {
        "100": string;
        "90": string;
        "80": string;
        "60": string;
        "40": string;
        "20": string;
        "10": string;
      };
      platinum: {
        "100": string;
        "98": string;
        "95": string;
        "90": string;
        "80": string;
        "60": string;
        "40": string;
        "30": string;
        "20": string;
      };
      darkGunmetal: {
        "100": string;
        "90": string;
        "85": string;
        "80": string;
        "60": string;
        "40": string;
        "20": string;
      };
      paleGreen: {
        "100": string;
        "80": string;
        "60": string;
        "40": string;
        "20": string;
        "10": string;
        "5": string;
      };
    };
  }

  type ThemeOptions = {
    palette: Partial<Theme>;
  };

  type createTheme = (options?: ThemeOptions) => Theme;
}

const lightTheme = createTheme({
  palette: {
    white: "#FFFFFF",
    black: "#000000",
    sunRay: {
      "100": "#FFCC00",
      // "80": "#BB9445",
      // "60": "#95783E",
      // "40": "#6D5A37",
      // "20": "#473E30",
    },
    blueDeFrance: {
      "100": "#0472D6",
      "90": "#037AD6",
      "80": "#7AB9EA",
      // "60": "#245B9D",
      // "40": "#224777",
      // "20": "#223550",
    },
    coralRed: {
      "100": "#FF0000",
      "90": "#FF6766",
      // "60": "#A6312D",
      // "40": "#792C2C",
      // "20": "#4D272B",
      // "10": "#36252A",
    },
    platinum: {
      "100": "#FFFFFF",
      "98": "#F7F7F7",
      "95": "#E6E6E6",
      "90": "#CCCCCC",
      "80": "#B3B3B3",
      "40": "#808080",
      // "30": "#626469",
      // "20": "#4D4E54",
    },
    darkGunmetal: {
      "100": "#000000",
      "90": "#010101",
      // "85": "#3D3F45",
      // "80": "#48494F",
      // "60": "#6E6F74",
      // "40": "#969799",
      // "20": "#BCBDBE",
    },
    paleGreen: {
      "100": "#33CB98",
      "80": "#009933",
      // "60": "#72A25A",
      // "40": "#56774B",
      // "20": "#3C4C3A",
      // "10": "#2E3831",
      // "5": "#262C2D",
    },
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          // "& button:not(.Mui-selected)": {
          //   color: "#A6A7A9",
          // },
          // "& .Mui-selected": {
          //   color: "#E2B04C",
          // },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
          font-family: 'YekanBakh';
          font-weight: 100;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 01\ Hairline.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 200;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 02\ Thin.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 300;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 03\ Light.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 400;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 04\ Regular.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 500;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 05\ Medium.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 600;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 06\ Bold.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 700;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 07\ Heavy.ttf');
        }
        @font-face {
          font-family: 'YekanBakh';
          font-weight: 800;
          src: local('/fonts/yekanBakh/Yekan\ Bakh\ FaNum\ 08\ Fat.ttf');
        }

        `,
    },
  },
  typography: {
    allVariants: {
      lineHeight: "normal",
    },
  },
} as ThemeOptions) as Theme;

export default lightTheme;
