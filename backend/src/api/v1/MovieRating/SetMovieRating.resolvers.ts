import MovieRating from '../../../entity/MovieRating';
import {
  SetMovieRatingMutationArgs,
  SetMovieRatingResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

/**
 * 한 영화에 여러 번 평점을 생성할 수 있음
 * 평점을 생성할 때는 생성 날짜를 기반으로 레코드 생성
 * 생성 후 평점과 날짜는 변경할 수 있음
 */

const resolvers: Resolvers = {
  Mutation: {
    SetMovieRating: privateResolver(
      async (
        _,
        args: SetMovieRatingMutationArgs,
        { req }
      ): Promise<SetMovieRatingResponse> => {
        try {
          const { id, movieId, rating, watchDate } = args;
          const { user } = req;
          if (id) {
            // id를 인자로 받은 경우 이전 데이터를 수정하기 위함
            const movieRating = await MovieRating.findOne({
              id,
              userId: user.id
            });
            if (movieRating) {
              // 이전 점수가 있는 경우
              movieRating.rating = rating;
              if (watchDate) {
                // watchDate를 인자로 받은 경우 날짜도 수정
                movieRating.watchDate = new Date(watchDate);
              }
              const updatedMovieRating = await MovieRating.save(movieRating);
              return {
                ok: true,
                type: 'update',
                error: null,
                movieRating: {
                  ...updatedMovieRating,
                  watchDate: updatedMovieRating.watchDate.toString(),
                  createdAt: updatedMovieRating.createdAt.toString()
                }
              };
            }
            // 해당 점수가 존재하지 않으므로 에러 출력
            return {
              ok: false,
              type: 'error',
              error: 'Rating not exists',
              movieRating: null
            };
          } else {
            // 이전 점수가 없는 경우
            const newMovieRating = await MovieRating.create({
              movieId,
              userId: user.id,
              rating
            }).save();
            return {
              ok: true,
              type: 'create',
              error: null,
              movieRating: {
                ...newMovieRating,
                watchDate: newMovieRating.watchDate.toString(),
                createdAt: newMovieRating.createdAt.toString()
              }
            };
          }
        } catch (error) {
          return {
            ok: false,
            type: 'unknown',
            error,
            movieRating: null
          };
        }
      }
    )
  }
};

export default resolvers;
