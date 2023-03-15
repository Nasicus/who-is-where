import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";

// required for localhost https (self signed cert)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontSizes: { xxl: "2.0rem" } }}
    >
      <App />
    </MantineProvider>
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
