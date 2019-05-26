import { Context } from 'graphql-yoga/dist/types';
import { getManager } from 'typeorm';
import MovieRating from '../../../entity/MovieRating';
import User from '../../../entity/User';
import { GetUserInfoQueryArgs } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetUserInfo: privateResolver(
      async (
        _: null | undefined,
        { userId }: GetUserInfoQueryArgs,
        context: Context
      ) => {
        let userIdTemp: number | undefined;
        if (userId) {
          userIdTemp = userId;
        } else {
          const {
            req: {
              user: { id }
            }
          } = context;
          userIdTemp = id;
        }
        const user = await User.findOne({ id: userIdTemp });
        if (user) {
          const watchedMovieCountTemp = await getManager()
            .createQueryBuilder(MovieRating, 'movie_rating')
            .select('COUNT(DISTINCT("movieId"))')
            .where('movie_rating.userId = :id', { id: userIdTemp })
            .getRawMany();
          const movieRatingCount = await getManager()
            .createQueryBuilder(MovieRating, 'movie_rating')
            .where('movie_rating.userId = :id', { id: userIdTemp })
            .getCount();
          return {
            ok: true,
            error: null,
            countInfo: {
              watchedMovieCount: watchedMovieCountTemp[0].count,
              movieRatingCount
            }
          };
        }
        return {
          ok: false,
          error: 'User not found',
          countInfo: null
        };
      }
    )
  }
};

export default resolvers;
