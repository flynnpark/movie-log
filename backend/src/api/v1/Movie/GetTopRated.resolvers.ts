import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getTopRated } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetTopRated: privateResolver(async (_: null | undefined) => getTopRated())
  }
};

export default resolvers;
