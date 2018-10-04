import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { findMovie } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    FindMovie: privateResolver(async (_, { query }) => findMovie(query))
  }
};

export default resolvers;
