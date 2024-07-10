import { createRoot } from "react-dom/client";
import MainComponent from "./MainComponent.js";

const root = createRoot(document.querySelector("#root")!).render(<MainComponent />)
