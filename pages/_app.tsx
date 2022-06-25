import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import "../services/i18n.tsx";
import Layout from "../layout/Layout";

import { wrapper } from "../store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
