import "../styles/globals.css";

import { SiteLayout } from "~/components/Layouts";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>);
  return getLayout(<Component {...pageProps} />);
}
