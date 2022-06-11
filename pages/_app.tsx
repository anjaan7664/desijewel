import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import "../services/i18n.tsx";
import Layout from "../layout/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
