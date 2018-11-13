import { Resolvers } from '../../../types/resolvers';
import MovieRating from '../../../entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetMovieRating: async (_, { movieId, limit }) => {
      const movieRatings = await MovieRating.find({
        where: { movieId },
        take: limit
      });
      return {
        ok: true,
        error: null,
        movieRatings
      };
    }
  }
};

export default resolvers;
