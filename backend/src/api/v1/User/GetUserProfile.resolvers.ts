import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import User from '../../../entity/User';

const resolvers: Resolvers = {
  Query: {
    GetUserProfile: privateResolver(async (_, { userId }, context) => {
      console.log(context.req.user.id); // context에 담긴 user information
      let user;
      if (!userId) {
        user = await User.findOne({ id: context.req.user.id });
      } else {
        user = await User.findOne({ id: userId });
      }
      if (user) {
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
    })
  }
};

export default resolvers;
