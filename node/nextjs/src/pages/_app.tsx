import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "config/apollo-client";
import { Layout } from "template/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
