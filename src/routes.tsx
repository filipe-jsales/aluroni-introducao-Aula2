import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Cardapio = lazy(() => import("pages/Cardapio"));
const Inicio = lazy(() => import("pages/Inicio"));
const NotFound = lazy(() => import("pages/NotFound"));
const Prato = lazy(() => import("pages/Prato"));
const Sobre = lazy(() => import("pages/Sobre"));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando . . .</p>}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Inicio />}></Route>
              <Route path="cardapio" element={<Cardapio />}></Route>
              <Route path="sobre" element={<Sobre />}></Route>
            </Route>
            <Route path="prato/:id" element={<Prato />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
