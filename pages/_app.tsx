import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { PersistGate as PersistGateClient } from "redux-persist/integration/react";

import ErrorFallback from "@/components/Atoms/ErrorFallback";
import Fonts from "@/components/Atoms/Fonts";

import { persistor, store } from "@/states/store";
import { getAccessToken } from "@/utils";

import type { ReactNode } from "react";

import "@/styles/globals.css";

const backEndUrl =
  typeof process.env.NEXT_PUBLIC_BACKEND_URL === "string"
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "";

const client = new ApolloClient({
  uri: `${backEndUrl}/query`,
  cache: new InMemoryCache(),
  // credentials: 'include',
  headers: {
    authorization: `Bearer ${getAccessToken()}`,
  },
});

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
  "3xl": "119em",
};

const customTheme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      grey10: "#DBDBDB",
      grey80: "#393939",
      darkBlue: "#081029",
      aboutUs: "#FFA8FA",
      careers: "#F7FF7C",
      clients: "#FFBB84",
      contactUs: "#FF558A",
      zodiacEvents: "#22CBFF",
      zodiacLabs: "#ED8041",
      zodiacSolutions: "#C992FF",
      zodiacStudios: "#00FFDA",
    },
  },
  fonts: {
    heading: '"Mark Pro", sans-serif',
    body: '"Barlow", sans-serif',
  },
});

const PersistGateServer = ({ children }: { children: ReactNode }) => {
  return children;
};

function MyApp({ Component, pageProps }: AppProps) {
  let runtime = process.env.RUNTIME;
  let PersistGate = PersistGateServer as unknown as typeof PersistGateClient;
  if (runtime === "browser") {
    PersistGate = PersistGateClient;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <ChakraProvider theme={customTheme}>
            <Fonts />
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={(error) => {
                console.error(error.message);
              }}
            >
              <Component {...pageProps} />
            </ErrorBoundary>
          </ChakraProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
