import { gql } from '@urql/core';

type Response = {
  subscribe: null;
};

type Variables = {
  episodeId: number;
  progress: number;
};

export const EpisodeProgress = gql<Response, Variables>`
  mutation ($episodeId: BigInt!, $progress: Int!) {
    updateProgress(episodeId: $episodeId, progress: $progress)
  }
`;
