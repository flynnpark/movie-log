import { Context } from 'graphql-yoga/dist/types';
import { GetUserProfileQueryArgs } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import User from '../../../entity/User';

const resolvers: Resolvers = {
  Query: {
    GetUserProfile: privateResolver(
      async (
        _: null | undefined,
        { userId }: GetUserProfileQueryArgs,
        context: Context
      ) => {
        let user: User | undefined;
        if (userId) {
          user = await User.findOne({ id: userId });
        } else {
          const {
            req: {
              user: { id }
            }
          } = context;
          user = await User.findOne({ id });
        }
        if (user) {
          delete user.password;
          return {
            ok: true,
            error: null,
            user
          };
        }
        return {
          ok: false,
          error: 'User not found',
          user: null
        };
      }
    )
  }
};

export default resolvers;
