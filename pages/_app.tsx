import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import "../services/i18n.tsx";
import Layout from "../layout/Layout";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import axios from "axios";
axios.defaults.baseURL = process.env.API_URL;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
