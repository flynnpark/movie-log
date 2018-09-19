import { Resolvers } from '../../../types/resolvers';
import { getNowPlaying } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetNowPlaying: _ => getNowPlaying()
  }
};

export default resolvers;
