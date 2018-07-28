import User from '../../../entity/User';
import {
  EmailSignInMutationArgs,
  EmailSignInResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (
      __dirname,
      args: EmailSignInMutationArgs
    ): Promise<EmailSignInResponse> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: 'No user found with that email',
            token: null,
          };
        }
        const checkPassword = await user.comparePassword(password);
        if (checkPassword) {
          return {
            ok: true,
            error: null,
            token: 'Will be',
          };
        } else {
          return {
            ok: false,
            error: 'Wrong password',
            token: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};
