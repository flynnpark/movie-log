import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getMovieDetail } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetMovieDetail: privateResolver(async (_, { movieId }) =>
      getMovieDetail(movieId)
    )
  }
};

export default resolvers;
