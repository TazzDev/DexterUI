import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DexterRouter from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DexterRouter />
  </StrictMode>
);
