import { FindMovieQueryArgs } from 'src/types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { findMovie } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    FindMovie: privateResolver(
      async (_: null | undefined, { query }: FindMovieQueryArgs) =>
        query && findMovie(query)
    )
  }
};

export default resolvers;
