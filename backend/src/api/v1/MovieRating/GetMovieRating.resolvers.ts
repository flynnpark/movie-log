import { Resolvers } from '../../../types/resolvers';
import MovieRating from '../../../entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetMovieRating: async (_, { movieId }) => {
      const movieRating = MovieRating.findOne({ movieId });
      if (!movieRating) {
        return {
          ok: false,
          error: 'No rating',
          movieRating: null,
        };
      }
      return {
        ok: false,
        error: null,
        movieRating,
      };
    },
  },
};

export default resolvers;
