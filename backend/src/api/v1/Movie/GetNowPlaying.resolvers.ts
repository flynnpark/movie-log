import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getNowPlaying } from '../../../utils/tmdb';

const resolvers: Resolvers = {
  Query: {
    GetNowPlaying: privateResolver(async _ => getNowPlaying())
  }
};

export default resolvers;
