import { Resolvers } from 'src/types/resolvers';
import { getPopular } from 'src/utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetPopular: _ => getPopular()
  }
};

export default resolvers;
