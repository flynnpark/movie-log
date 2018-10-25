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
          } else {
            // 점수 업데이트
            movieRating.rating = rating;
            await MovieRating.save(movieRating);
          }
          // type 구분해서 리턴 값 넘겨야할 듯 함
          return {
            ok: false,
            error: 'Rating about this movie exist already',
            movieRating
          };
        } else {
          const newMovieRating = await MovieRating.create({
            movieId,
            userId: user.id,
            rating
          }).save();
          return {
            ok: true,
            error: null,
            movieRating: newMovieRating
          };
        }
      }
    )
  }
};

export default resolvers;
