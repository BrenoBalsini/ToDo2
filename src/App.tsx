import { HashRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<LayoutMain/>}>
          <Route index element={<PageHome/>}/>
          <Route path="/components" element={<PageComponents/>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}