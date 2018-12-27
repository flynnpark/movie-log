import User from '../../../entity/User';
import {
  EmailSignInMutationArgs,
  EmailSignInResponse,
  UserExpose
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import { createJWT } from '../../../utils/jwt';

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (
      _,
      args: EmailSignInMutationArgs
    ): Promise<EmailSignInResponse> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
          return {
            ok: false,
            error: 'No user found with that email',
            token: null,
            user: null
          };
        }
        const checkPassword = await user.comparePassword(password);
        if (checkPassword) {
          const token = createJWT(user.id);
          delete user.password;
          const userExpose: UserExpose = {
            ...user,
            createdAt: user.createdAt.toString()
          };
          return {
            ok: true,
            error: null,
            token,
            user: userExpose
          };
        } else {
          return {
            ok: false,
            error: 'Wrong password',
            token: null,
            user: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error,
          token: null,
          user: null
        };
      }
    }
  }
};

export default resolvers;
