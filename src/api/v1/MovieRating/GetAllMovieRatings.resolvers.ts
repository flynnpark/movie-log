import { Resolvers } from '../../../types/resolvers';
import User from '../../../entity/User';
import MovieRating from '../../../entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetAllMovieRatings: async (_, { userId }) => {
      const user = User.findOne({ id: userId });
      if (!user) {
        return {
          ok: false,
          error: 'User not found',
          movieRatings: null,
        };
      } else {
        const movieRatings = MovieRating.find({ userId });
        return {
          ok: true,
          error: null,
          movieRatings,
        };
      }
    },
  },
};

export default resolvers;
