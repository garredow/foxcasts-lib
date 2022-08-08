import { Client, createClient, OperationResult, TypedDocumentNode } from '@urql/core';

type Config = {
  apiUrl: string;
  apiToken: string;
};

export class Query {
  private client: Client;

  constructor(config: Config) {
    this.client = createClient({
      url: `${config.apiUrl}/graphql`,
      fetchOptions: () => {
        return {
          headers: { authorization: `Bearer ${config.apiToken}` },
        };
      },
    });
  }

  public async send<TData, TVariables extends object>(
    query: TypedDocumentNode<TData, TVariables> | string,
    variables?: TVariables
  ): Promise<OperationResult<any, any>> {
    const res = await this.client.query(query, variables).toPromise();
    return res;
  }
}
