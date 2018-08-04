import { Resolvers } from '../../../types/resolvers';
import { findMovie } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    FindMovie: (_, { query }) => findMovie(query),
  },
};

export default resolvers;
