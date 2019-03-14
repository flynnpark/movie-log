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
        const {
          req: {
            user: { id }
          }
        } = context;
        let user;
        let isMe = false;
        if (userId) {
          // userId가 있고 id와 같을 경우 자신의 프로필
          // 둘 다 아닐 경우 남의 프로필
          user = await User.findOne({ id: userId });
          if (id === userId) {
            isMe = true;
          }
        } else {
          // userId가 없을 경우 자신의 프로필
          user = await User.findOne({ id });
          isMe = true;
        }
        if (user) {
          delete user.password;
          return {
            ok: true,
            error: null,
            user: {
              ...user,
              isMe
            }
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
