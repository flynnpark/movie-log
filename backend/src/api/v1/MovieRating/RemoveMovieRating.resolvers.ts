import { Context } from 'graphql-yoga/dist/types';
import MovieRating from '../../../entity/MovieRating';
import {
  RemoveMovieRatingMutationArgs,
  RemoveMovieRatingResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    RemoveMovieRating: privateResolver(
      async (
        _: null | undefined,
        args: RemoveMovieRatingMutationArgs,
        { req }: Context
      ): Promise<RemoveMovieRatingResponse> => {
        try {
          const { id } = args;
          const { user } = req;
          const targetMovieRating = await MovieRating.findOne({
            where: {
              id,
              userId: user.id
            }
          });
          if (id && targetMovieRating) {
            const removedMovieRating = await MovieRating.remove(
              targetMovieRating
            );
            return {
              ok: true,
              error: null,
              movieRating: {
                ...removedMovieRating,
                id,
                watchDate: removedMovieRating.watchDate.toString(),
                createdAt: removedMovieRating.createdAt.toString()
              }
            };
          }
          return {
            ok: false,
            error: 'MovieRating is not exists.',
            movieRating: null
          };
        } catch (error) {
          return {
            ok: false,
            error,
            movieRating: null
          };
        }
      }
    )
  }
};

export default resolvers;
