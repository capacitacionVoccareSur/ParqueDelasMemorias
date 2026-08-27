import { useState } from "react";
import Layout from "./components/Layout";
import "./index.css";

export default function App() {
  const [activePanel, setActivePanel] = useState("inicio");

  return <Layout activePanel={activePanel} setActivePanel={setActivePanel} />;
}
