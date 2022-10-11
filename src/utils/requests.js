export const BASE_URL=process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8887/api/equals";
export const PARAMETROS_URL=process.env.REACT_APP_BACKEND_URL ?? "/v1/parametros";

/* ADQUIRENTES */
export const URL_ADQUIRENTE=process.env.REACT_APP_URL_ADQUIRENTE ?? "/v1/adquirentes";
export const URL_ADQUIRENTE_ALL=process.env.REACT_APP_URL_ADQUIRENTE_ALL ?? "/v1/adquirentes/all";
export const URL_ADQUIRENTE_NOVO=process.env.REACT_APP_URL_ADQUIRENTE_NOVO ?? "/v1/adquirentes";

/* BANDEIRAS */
export const URL_BANDEIRA=process.env.REACT_APP_URL_BANDEIRA ?? "/v1/bandeiras";
export const URL_BANDEIRA_ALL=process.env.REACT_APP_URL_BANDEIRA_ALL ?? "/v1/bandeiras/all";
export const URL_BANDEIRA_NOVA=process.env.REACT_APP_URL_BANDEIRA_NOVA ?? "/v1/bandeiras";

/* PRODUTOS */
export const URL_PRODUTO=process.env.REACT_APP_URL_PRODUTO ?? "/v1/produtos";
export const URL_PRODUTO_ALL=process.env.REACT_APP_URL_PRODUTO_ALL ?? "/v1/produtos/all";
export const URL_PRODUTO_NOVO=process.env.REACT_APP_URL_PRODUTO_NOVO ?? "/v1/produtos";

/* COBRANÇAS EQUALS */
export const URL_COBRANCA_EQUALS=process.env.REACT_APP_URL_COBRANCA_EQUALS ?? "/v1/cobrancasEquals";
export const URL_COBRANCA_EQUALS_NAO_PARAMETRIZADA=process.env.REACT_APP_URL_COBRANCA_EQUALS_NAO_PARAMETRIZADA ?? "/v1/cobrancasEquals/cobrancasNaoParametrizadas";
export const URL_COBRANCA_EQUALS_NOVO=process.env.REACT_APP_URL_COBRANCA_EQUALS_NOVO ?? "/v1/cobrancasEquals";

/* COBRANÇAS WINTHOR */
export const URL_COBRANCA_WINTHOR=process.env.REACT_APP_URL_COBRANCA_WINTHOR ?? "/v1/cobrancasWinthor";
export const URL_COBRANCA_WINTHOR_NOVO=process.env.REACT_APP_URL_COBRANCA_WINTHOR_NOVO ?? "/v1/cobrancasWinthor";

/* CONCILIAÇÕES */
export const URL_CONCILIACAO=process.env.REAC_APP_URL_CONCILIACAO ?? "/v1/conciliacao";
export const URL_CONCILIAR=process.env.REAC_APP_URL_CONCILIAR ?? "/v1/conciliar";

/* TITULOS */
export const URL_TITULOS_ENVIADOS=process.env.REAC_APP_URL_TITULOS_ENVIADOS ?? "/v1/receber/enviados";