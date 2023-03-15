import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  Observable,
  RequestParameters,
  Variables,
  CacheConfig,
} from "relay-runtime";
import { createClient } from "graphql-ws";
import queryString from "query-string";

const HTTP_ENDPOINT =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:44301/api/graphql"
    : "https://who-is-where-api.azurewebsites.net/graphql";
const WSS_URL =
  process.env.NODE_ENV !== "production"
    ? "wss://localhost:44301/api/graphql"
    : "wss://who-is-where-api.azurewebsites.net/graphql";

    const password = queryString.parse(window.location.search)?.password;

const fetchFn: FetchFunction = async (request, variables) => {

  const resp = await fetch(`${HTTP_ENDPOINT}?${queryString.stringify({password})}`, {
    method: "POST",
    headers: {
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      "x-password": Array.isArray(password) ? password[0] : password,
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  });

  return await resp.json();
};


const wsClient = createClient({
  url: `${WSS_URL}?${queryString.stringify({password})}`,
});

const subscribe = (
  operation: RequestParameters,
  variables: Variables,
  _: CacheConfig
): any => {
  return Observable.create((sink) => {
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      sink
    );
  });
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn, subscribe),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
