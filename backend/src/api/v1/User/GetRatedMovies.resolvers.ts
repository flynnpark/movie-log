import { getManager } from 'typeorm';
import { GetRatedMoviesQueryArgs } from 'src/types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import MovieRating from '../../../entity/MovieRating';
import User from '../../../entity/User';

const resolvers: Resolvers = {
  Query: {
    GetRatedMovies: privateResolver(
      async (
        _: null | undefined,
        { userId, offset }: GetRatedMoviesQueryArgs
      ) => {
        try {
          const user = await User.findOne({ id: userId });
          if (!user) {
            return {
              ok: false,
              error: 'No user found with that id',
              ratedMovies: null
            };
          }
          const ratedMovies = await getManager()
            .createQueryBuilder(MovieRating, 'movie_rating')
            .select('"movieId", "createdAt"')
            .where('movie_rating.userId = :id', { id: userId })
            .orderBy('"createdAt"', 'DESC')
            .limit(8)
            .offset(offset)
            .getRawMany();
          if (ratedMovies.length === 0) {
            return {
              ok: false,
              error: 'No movies anymore',
              ratedMovies: null
            };
          }
          return {
            ok: true,
            error: null,
            ratedMovies
          };
        } catch (error) {
          return {
            ok: false,
            error,
            ratedMovies: null
          };
        }
      }
    )
  }
};

export default resolvers;
