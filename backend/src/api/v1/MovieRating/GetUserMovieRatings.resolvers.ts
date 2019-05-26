import MovieRating from '../../../entity/MovieRating';
import User from '../../../entity/User';
import { Resolvers } from '../../../types/resolvers';

const resolvers: Resolvers = {
  Query: {
    GetUserMovieRatings: async (_, { userId }) => {
      const user = User.findOne({ id: userId });
      if (!user) {
        return {
          ok: false,
          error: 'User not found',
          movieRatings: null
        };
      }
      const movieRatings = MovieRating.find({ userId });
      return {
        ok: true,
        error: null,
        movieRatings
      };
    }
  }
};

export default resolvers;
