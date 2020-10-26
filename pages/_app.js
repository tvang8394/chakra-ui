import "../styles/globals.css";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
