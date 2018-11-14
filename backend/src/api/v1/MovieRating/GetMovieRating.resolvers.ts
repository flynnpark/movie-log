import { GetMovieRatingQueryArgs } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import MovieRating from '../../../entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetMovieRating: async (_, args: GetMovieRatingQueryArgs, { req }) => {
      const { movieId } = args;
      const { user } = req;
      const movieRating = await MovieRating.findOne({
        where: { movieId, userId: user.id }
      });
      if (!movieRating) {
        return {
          ok: false,
          error: 'No rating',
          movieRating: null
        };
      }
      return {
        ok: true,
        error: null,
        movieRating
      };
    }
  }
};

export default resolvers;
