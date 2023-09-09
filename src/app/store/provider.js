"use client";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export function Providers({ children }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}
