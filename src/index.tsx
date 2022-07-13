import { createRoot } from "react-dom/client";
import MainComponent from "./MainComponent";

const root = createRoot(document.querySelector("#root")!)

root.render(<MainComponent />)

