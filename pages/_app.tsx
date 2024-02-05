import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { HStack, Heading, NativeBaseProvider, Text } from "native-base";
import theme from "../common/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider theme={theme}>
      <HStack p="4">
        <Heading>Hello World!</Heading>
      </HStack>
    </NativeBaseProvider>
  );
}

export default MyApp;
