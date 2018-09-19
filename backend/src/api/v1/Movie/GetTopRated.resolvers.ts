import { Resolvers } from '../../../types/resolvers';
import { getTopRated } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetTopRated: _ => getTopRated()
  }
};

export default resolvers;
