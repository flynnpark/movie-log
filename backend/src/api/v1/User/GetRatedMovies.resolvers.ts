import { getManager } from 'typeorm';
import { GetRatedMoviesQueryArgs } from 'src/types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import MovieRating from '../../..//entity/MovieRating';

const resolvers: Resolvers = {
  Query: {
    GetRatedMovies: privateResolver(
      async (_: null | undefined, { userId }: GetRatedMoviesQueryArgs) => {
        const ratedMovies = await getManager()
          .createQueryBuilder(MovieRating, 'movie_rating')
          .select('DISTINCT("movieId")')
          .where('movie_rating.userId = :id', { id: userId })
          .getRawMany();
        return {
          ok: false,
          error: null,
          ratedMovies
        };
      }
    )
  }
};

export default resolvers;
