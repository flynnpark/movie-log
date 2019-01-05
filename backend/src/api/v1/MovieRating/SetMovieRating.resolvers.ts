import { Context } from 'graphql-yoga/dist/types';
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
        _: null | undefined,
        args: SetMovieRatingMutationArgs,
        { req }: Context
      ): Promise<SetMovieRatingResponse> => {
        try {
          const { movieId, rating, watchDate } = args;
          const { user } = req;
          const newMovieRating = await MovieRating.create({
            movieId,
            userId: user.id,
            rating,
            watchDate: new Date(watchDate)
          }).save();
          return {
            ok: true,
            error: null,
            movieRating: {
              ...newMovieRating,
              watchDate: newMovieRating.watchDate.toString(),
              createdAt: newMovieRating.createdAt.toString()
            }
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
