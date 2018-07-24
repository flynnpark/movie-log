import { MovieQueryArgs, MovieResponse } from '../../../types/graph';

const resolvers = {
  Query: {
    movie: (_, args: MovieQueryArgs): MovieResponse => {
      return {
        title: `HarryPotter ${args.name}`,
        year: 2004
      };
    }
  }
};

export default resolvers;
