import { Context } from 'graphql-yoga/dist/types';
import { GetMovieRatingsQueryArgs } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import MovieRating from '../../../entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetMovieRatings: async (
      _: null | undefined,
      args: GetMovieRatingsQueryArgs,
      { req }: Context
    ) => {
      const { movieId, limit } = args;
      const { user } = req;
      const take = limit ? limit : 5;
      const movieRatings = await MovieRating.find({
        where: { movieId, userId: user.id },
        take,
        order: {
          watchDate: 'DESC'
        }
      });
      return {
        ok: true,
        error: null,
        movieRatings
      };
    }
  }
};

export default resolvers;
