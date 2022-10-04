import axios from "axios";
import { parseCookies } from "nookies";

// Estamos utilizando cookies na aplicação, pois no NextJs é 100% mais viável o uso de cookies,
// pois ele pode acessar o lado do cliente e do serverside (um dos principais recursos do Next)

export function setupApiClient(ctx = undefined) {
  const { USER_JWT } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  // O interceptors é utilizado para interceptar requisições ou resposta, ou seja,
  // podemos executar um código antes de uma requisição ser feita para o back-end ou...
  // antes de recebermos uma resposta do back-end
  api.interceptors.request.use((request) => {
    // O header vem como undefined, então adiciono um valor padrão
    const headers = request.headers ?? {};

    // Authorization geralmente é o header padrão para envio de token, mas isso não é uma regra. O endpoint pode requisitar outro header.
    // Condição para ver se o token existe e se ele existir eu coloco o token no bearer
    // Essa condição é necessária, pois toda vez antes de fazer uma requisição ele vai adicionar o JWT no bearer
    // Caso não tenha isso, ele vai ficar com o JWT no bearer indefinido e persistindo com o Erro 401
    if (USER_JWT) headers.Authorization = `Bearer ${USER_JWT}`;

    request.headers = headers;
    // Este return é necessário para continuar a requisição para o endpoint.
    // Se não nunca vai enviar a requisição
    return request;
  });

  return api;
}

export const api = setupApiClient();
