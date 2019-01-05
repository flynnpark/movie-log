import { getConnection } from 'typeorm';
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
        const movieRepository = getConnection().getRepository(Movie);
        const movieDetailFromDB = await movieRepository.findOne({
          relations: ['genres'],
          where: { id: movieId }
        });
        // DB에 이미 정보가 있을 경우 바로 반환
        if (movieDetailFromDB) {
          return {
            ok: true,
            error: null,
            movie: {
              ...movieDetailFromDB,
              release_date: movieDetailFromDB.release_date.toString()
            }
          };
        }

        // DB에 정보가 없을 경우 TMDB API로 정보 요청
        const movieDetail = await getMovieDetail(movieId);
        // TMDB에서 가져온 정보가 있을 경우
        if (movieDetail) {
          // 장르 저장
          const genres = movieDetail.genres;
          if (genres) {
            genres.map(async genre => {
              return await Genre.create(genre).save();
            });
          }
          // 장르 정보를 포함한 영화 정보 저장
          const movieDetailToDB = new Movie();
          movieDetailToDB.id = movieDetail.id;
          movieDetailToDB.title = movieDetail.title;
          movieDetailToDB.tagline = movieDetail.tagline;
          movieDetailToDB.poster_path = movieDetail.poster_path;
          movieDetailToDB.original_language = movieDetail.original_language;
          movieDetailToDB.original_title = movieDetail.original_title;
          movieDetailToDB.adult = movieDetail.adult;
          movieDetailToDB.overview = movieDetail.overview;
          movieDetailToDB.release_date = new Date(movieDetail.release_date);
          movieDetailToDB.runtime = movieDetail.runtime;
          movieDetailToDB.genres = genres;
          await Movie.create(movieDetailToDB).save();
          // 다시 DB에 movieId로 정보 검색
          const movieDetailFromDB = await movieRepository.findOne({
            relations: ['genres'],
            where: { id: movieId }
          });
          // 해당 movieId에 속하는 데이터가 있을 경우 반환
          if (movieDetailFromDB) {
            return {
              ok: true,
              error: null,
              movie: {
                ...movieDetailFromDB,
                release_date: movieDetailFromDB.release_date.toString()
              }
            };
          }
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
