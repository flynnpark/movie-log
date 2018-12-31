import { getManager } from 'typeorm';
import { Context } from 'graphql-yoga/dist/types';
import { GetUserProfileQueryArgs } from 'src/types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import User from '../../../entity/User';
import MovieRating from '../../../entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetUserProfile: privateResolver(
      async (
        _: null | undefined,
        { userId }: GetUserProfileQueryArgs,
        context: Context
      ) => {
        let userTemp: User | undefined;
        if (!userId) {
          const {
            req: {
              user: { id }
            }
          } = context;
          userTemp = await User.findOne({ id });
        } else {
          userTemp = await User.findOne({ id: userId });
        }
        if (userTemp) {
          const userMovieRatingInformation = await getManager()
            .createQueryBuilder(MovieRating, 'movie_rating')
            .select('COUNT(DISTINCT(movie_rating.movieId)) AS cnt')
            .where('movie_rating.userId = :id', { id: userTemp.id })
            .getRawMany();
          console.log(userMovieRatingInformation);
          delete userTemp.password;
          return {
            ok: true,
            error: null,
            user: userTemp
          };
        }
        return {
          ok: false,
          error: 'User not found',
          user: null
        };
      }
    )
  }
};

export default resolvers;
