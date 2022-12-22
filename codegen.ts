
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3300/graphql",
  documents: "graphql/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    ".types/gql/": {
      preset: "client",
      config: {
        useTypeImports: true
      },
      plugins: []
    }
  }
};

export default config;
