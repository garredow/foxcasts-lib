import { gql } from '@urql/core';

type Response = {
  subscribe: null;
};

type Variables = {
  podcastId: number;
};

export const Subscribe = gql<Response, Variables>`
  mutation ($podcastId: BigInt!) {
    subscribe(podcastId: $podcastId)
  }
`;
