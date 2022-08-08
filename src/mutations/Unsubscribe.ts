import { gql } from '@urql/core';

type Response = {
  unsubscribe: null;
};

type Variables = {
  podcastId: number;
};

export const Unsubscribe = gql<Response, Variables>`
  mutation ($podcastId: BigInt!) {
    unsubscribe(podcastId: $podcastId)
  }
`;
