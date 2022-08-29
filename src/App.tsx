import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes/pages/app.routes";

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}