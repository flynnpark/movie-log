import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import { getMovieDetail } from '../../../utils/tmdb';
import {
  GetMovieDetailQueryArgs,
  GetMovieDetailResponse
} from '../../../types/graph';
import Movie from '../../../entity/Movie';
import Genre from '../../../entity/Genre';

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
          const genres = movieDetail.genres;
          if (genres) {
            genres.forEach(async genre => {
              await Genre.create(genre).save();
            });
          }
          const movieDetailToDB = await Movie.create(movieDetail).save();
          return {
            ok: true,
            error: null,
            movie: {
              ...movieDetailToDB,
              release_date: movieDetailToDB.release_date.toString()
            }
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
