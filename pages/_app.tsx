import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import "../services/i18n.tsx";
import Layout from "../layout/Layout";
import { SessionProvider } from "next-auth/react"

import { wrapper } from "../store";
function MyApp({ Component,  pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
