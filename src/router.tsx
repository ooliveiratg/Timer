import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { Home } from "./Pages/Home";
import { History } from "./Pages/History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History/>} />
      </Route>
    </Routes>
  );
}
