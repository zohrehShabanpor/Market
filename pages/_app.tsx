import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { createEmotionCache } from "_";
import lightTheme from "../styles/theme/light";
import "../styles/globals.css";
import { Layout, MobileView, MarketHeader } from "#";
import { useStore } from "@store";
import { observer } from "mobx-react";
import { mainColors } from "#/Layout";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps & { emotionCache: EmotionCache }) {
  const globalStore = useStore();
  let module = globalStore.currentModule;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MobileView>
          {module?.hasLayout === true ? (
            <Layout>
              {module.themeColor === mainColors.green ? <MarketHeader /> : null}
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </MobileView>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default observer(MyApp);
