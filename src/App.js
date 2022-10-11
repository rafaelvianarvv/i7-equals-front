import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/pages/home/Home';
import Navbar from "./components/layout/modulos/Navbar";
import Adquirentes from './components/pages/parametros/adquirente/Adquirentes';
import TitulosEnviados from './components/pages/titulos/enviados/TitulosEnviados';
import TitulosConciliados from './components/pages/titulos/conciliados/TitulosConciliados';
import TitulosBaixados from './components/pages/titulos/baixados/TitulosBaixados';
import TitulosEnviadosPesquisados from './components/pages/titulos/enviados/TitulosEnviadosPesquisados';
import Bandeiras from "./components/pages/parametros/bandeira/Bandeiras";
import Produtos from "./components/pages/parametros/produto/Produtos";
import BandeiraNovoForm from "./components/pages/parametros/bandeira/BandeiraNovoForm";
import ProdutoNovoForm from "./components/pages/parametros/produto/ProdutoNovoForm";
import AdquirenteNovoForm from "./components/pages/parametros/adquirente/AdquirenteNovoForm";
import CobrancasEquals from "./components/pages/parametros/cobrancaEquals/CobrancasEquals";
import CobrancaEqualsNovoForm from "./components/pages/parametros/cobrancaEquals/CobrancaEqualsNovoForm";
import CobrancasWinthor from "./components/pages/parametros/cobrancaWinthor/CobrancasWinthor";
import CobrancaWinthorNovoForm from "./components/pages/parametros/cobrancaWinthor/CobrancaWinthorNovoForm";
import Conciliacao from "./components/pages/conciliacao/Conciliacao";
import Footer from "./components/layout/modulos/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titulosEnviados" element={<TitulosEnviados />} />
        <Route path="/titulosEnviadosPesquisados" element={<TitulosEnviadosPesquisados />} />
        <Route path="/titulosConciliados" element={<TitulosConciliados />} />
        <Route path="/titulosBaixados" element={<TitulosBaixados />} />

        <Route path="/bandeiras" element={<Bandeiras />} />
        <Route path="/bandeiraNovo" element={<BandeiraNovoForm />} />
        
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtoNovo" element={<ProdutoNovoForm />} />

        <Route path="/adquirentes" element={<Adquirentes />} />
        <Route path="/adquirenteNovo" element={<AdquirenteNovoForm />} />

        <Route path="/cobrancasEquals" element={<CobrancasEquals />} />
        <Route path="/cobrancaEqualsNovo" element={<CobrancaEqualsNovoForm />} />

        <Route path="/cobrancasWinthor" element={<CobrancasWinthor />} />
        <Route path="/cobrancaWinthorNovo" element={<CobrancaWinthorNovoForm />} />

        <Route path="/conciliacao" element={<Conciliacao />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
