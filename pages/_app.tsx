import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import theme from "../common/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return <NativeBaseProvider theme={theme}>Hello World</NativeBaseProvider>;
}

export default MyApp;
