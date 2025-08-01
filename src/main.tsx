import { AuthProvider } from "react-oidc-context";
import App from "./App";
import { createRoot } from "react-dom/client";

const oidcConfig = {
  authority: "https://this-does-not-exist.xwgfsf",
  client_id: "this_dose_not_exist",
  redirect_uri: window.origin,
};

createRoot(document.getElementById("root")!).render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);
