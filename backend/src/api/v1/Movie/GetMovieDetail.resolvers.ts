import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getMovieDetail } from '../../../utils/tmdb';
const resolvers: Resolvers = {
  Query: {
    GetMovieDetail: privateResolver(async (_, { movieId }) => {
      const movieDetail = await getMovieDetail(movieId);
      if (movieDetail) {
        return {
          ok: true,
          error: null,
          movie: movieDetail
        };
      }
      return {
        ok: false,
        error: 'Movie not found',
        movie: null
      };
    })
  }
};

export default resolvers;
