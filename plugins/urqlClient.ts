import {
  install,
  createClient,
  debugExchange,
  dedupExchange,
  fetchExchange
} from "@urql/vue";

export default defineNuxtPlugin((nuxt) => {
  const apiURL = "http://localhost:3300/graphql";

  const client = createClient({
    url: apiURL,
    requestPolicy: "network-only",
    exchanges: [debugExchange, dedupExchange, fetchExchange]
  });

  install(nuxt.vueApp, client);
});
