import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from "react-dom"
import { Routes } from "./router"
import "./index.css"

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
