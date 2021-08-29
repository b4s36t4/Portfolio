import { ApolloClient, InMemoryCache } from "@apollo/client";
export const Client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  cache: new InMemoryCache(),
});
