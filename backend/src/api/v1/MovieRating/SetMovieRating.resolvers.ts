import MovieRating from '../../../entity/MovieRating';
import {
  SetMovieRatingMutationArgs,
  SetMovieRatingResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    SetMovieRating: privateResolver(
      async (
        _,
        args: SetMovieRatingMutationArgs,
        { req }
      ): Promise<SetMovieRatingResponse> => {
        try {
          const { movieId, rating } = args;
          const { user } = req;
          const movieRating = await MovieRating.findOne({
            movieId,
            userId: user.id
          });
          if (movieRating) {
            if (movieRating.rating === rating) {
              //  점수 삭제
              await MovieRating.remove(movieRating);
              return {
                ok: true,
                type: 'remove',
                error: null,
                movieRating
              };
            } else {
              // 점수 업데이트
              movieRating.rating = rating;
              await MovieRating.save(movieRating);
              return {
                ok: true,
                type: 'update',
                error: null,
                movieRating
              };
            }
          } else {
            const newMovieRating = await MovieRating.create({
              movieId,
              userId: user.id,
              rating
            }).save();
            return {
              ok: true,
              type: 'create',
              error: null,
              movieRating: newMovieRating
            };
          }
        } catch (error) {
          return {
            ok: false,
            type: null,
            error,
            movieRating: null
          };
        }
      }
    )
  }
};

export default resolvers;
