import { Movie } from '../../../types/graph';

const resolvers = {
  Query: {
    movie: (): Movie => {
      return {
        title: 'HarryPotter',
        year: 2004
      };
    }
  }
};

export default resolvers;
