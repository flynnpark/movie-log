import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import User from '../../../entity/User';
import { Context } from 'graphql-yoga/dist/types';
import { GetUserProfileQueryArgs } from 'src/types/graph';

const resolvers: Resolvers = {
  Query: {
    GetUserProfile: privateResolver(
      async (
        _: null | undefined,
        { userId }: GetUserProfileQueryArgs,
        context: Context
      ) => {
        console.log(context.req.user.id); // context에 담긴 user information
        let userTemp: User | undefined;
        if (!userId) {
          const {
            req: {
              user: { id }
            }
          } = context;
          userTemp = await User.findOne({ id });
        } else {
          userTemp = await User.findOne({ id: userId });
        }
        if (userTemp) {
          delete userTemp.password;
          return {
            ok: true,
            error: null,
            user: userTemp
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
