import { Resolvers } from 'src/types/resolvers';
import { getTopRated } from 'src/utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetTopRated: _ => getTopRated()
  }
};

export default resolvers;
