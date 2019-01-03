import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getMovieDetail } from '../../../utils/tmdb';
import {
  GetMovieDetailQueryArgs,
  GetMovieDetailResponse
} from '../../../types/graph';
import Movie from '../../../entity/Movie';

const resolvers: Resolvers = {
  Query: {
    GetMovieDetail: privateResolver(
      async (
        _: null | undefined,
        { movieId }: GetMovieDetailQueryArgs
      ): Promise<GetMovieDetailResponse> => {
        const movieDetailFromDB = await Movie.findOne({ id: movieId });
        if (movieDetailFromDB) {
          return {
            ok: true,
            error: null,
            movie: null
          };
        }
        const movieDetail = await getMovieDetail(movieId);
        if (movieDetail) {
          // const movieDetailToDB = await Movie.create(movieDetail).save();
          return {
            ok: true,
            error: null,
            movie: null
          };
        }
        return {
          ok: false,
          error: 'Movie not found',
          movie: null
        };
      }
    )
  }
};

export default resolvers;
