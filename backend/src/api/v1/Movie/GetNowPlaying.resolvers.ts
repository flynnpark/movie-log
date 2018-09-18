import { Resolvers } from 'src/types/resolvers';
import { getNowPlaying } from 'src/utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetNowPlaying: _ => getNowPlaying()
  }
};

export default resolvers;
