import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getMovieDetail } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetMovieDetail: privateResolver(async (_, { movieId }) => {
      const movieDetail = await getMovieDetail(movieId);
      if (movieDetail.status_code) {
        return {
          ok: false,
          error: 'Movie not found',
          movie: null
        };
      }
      return {
        ok: true,
        error: null,
        movie: movieDetail
      };
    })
  }
};

export default resolvers;
