import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/pages/home/Home';
import Navbar from "./components/layout/modulos/Navbar";
import Adquirentes from './components/pages/parametros/adquirente/Adquirentes';
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
import LoteEnviado from "./components/pages/titulos/loteEnviado/LoteEnviado";
import LoteConciliado from "./components/pages/titulos/loteConciliado/LoteConciliado";
import LoteReceber from "./components/pages/titulos/loteReceber/LoteReceber";
import LoteRecebido from "./components/pages/titulos/loteRecebido/LoteRecebido";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/loteEnviado" element={<LoteEnviado />} />
        <Route path="/loteConciliado" element={<LoteConciliado />} />
        <Route path="/loteReceber" element={<LoteReceber />} />
        <Route path="/loteRecebido" element={<LoteRecebido />} />

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
