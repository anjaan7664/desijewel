import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import "../services/i18n.tsx";
import Layout from "../layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store";
import axios from 'axios';
axios.defaults.baseURL = process.env.API_URL;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
