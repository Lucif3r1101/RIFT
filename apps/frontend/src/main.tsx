import React from "react";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import { App } from "./App";

inject();

const app = <App />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  import.meta.env.DEV ? app : <React.StrictMode>{app}</React.StrictMode>
);
