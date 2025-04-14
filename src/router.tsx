import { Routes, Route } from "react-router-dom";
import { History } from "./Pages/History";
import { Home } from "./Pages/Home";
import { DefaultLayout } from "./Layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}