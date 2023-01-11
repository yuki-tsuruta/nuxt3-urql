
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    ".types/gql/": {
      schema: "http://localhost:3300/graphql",
      documents: "graphql/profile.graphql",
      preset: "client",
      config: {
        useTypeImports: true
      },
      plugins: []
    },
    ".types/hasura/gql/": {
      schema: "http://localhost:8080/v1/graphql",
      documents: "graphql/hasura/user.graphql",
      preset: "client",
      config: {
        useTypeImports: true
      },
      plugins: []
    }
  }
};

export default config;
