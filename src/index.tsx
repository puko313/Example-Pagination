import React from "react"
import ReactDOM from "react-dom/client"
import "./global.scss"
import { Listings } from "./Listings"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Listings />
  </React.StrictMode>
)
