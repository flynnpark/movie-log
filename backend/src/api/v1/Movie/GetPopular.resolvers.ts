import { Resolvers } from '../../../types/resolvers';
import { getPopular } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetPopular: _ => getPopular()
  }
};

export default resolvers;
