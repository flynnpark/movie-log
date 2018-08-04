import MovieRating from '../../../entity/MovieRating';
import {
  SetMovieRatingMutationArgs,
  SetMovieRatingResponse,
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
        const { movieId } = args;
        const { user } = req;
        const movieRating = await MovieRating.findOne({
          movieId,
          userId: user.id,
        });
        if (movieRating) {
          return {
            ok: false,
            error: 'Rating about this movie exist already',
            movieRating,
          };
        } else {
          const newMovieRating = await MovieRating.create({
            ...args,
            movieId: user.id,
          }).save();
          return {
            ok: true,
            error: null,
            movieRating: newMovieRating,
          };
        }
        return {
          ok: true,
          error: null,
          movieRating: null,
        };
      }
    ),
  },
};

export default resolvers;
