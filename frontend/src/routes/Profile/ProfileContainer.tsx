import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { getProfileData, getRatedMovies } from 'src/types/api';
import { GET_PROFILE_DATA, GET_RATED_MOVIES } from './ProfileQueries';
import Loading from 'src/components/Loading';
import ProfilePresenter from './ProfilePresenter';

interface IParams {
  userId: string;
}

interface IProps extends RouteComponentProps<IParams> {}

class ProfileQueries extends Query<getProfileData> {}

class RatedMoviesQueries extends Query<getRatedMovies> {}

class ProfileContainer extends Component<IProps, any> {
  public render() {
    const { match } = this.props;
    if (match) {
      const {
        params: { userId }
      } = match;
      const offset = 0;
      return (
        <ProfileQueries query={GET_PROFILE_DATA} variables={{ userId }}>
          {({ data: profileData, loading: profileLoading }) => (
            <RatedMoviesQueries
              query={GET_RATED_MOVIES}
              variables={{ userId, offset }}
            >
              {({ data: ratedMoviesData, loading: ratedMoviesLoading }) => {
                console.log(ratedMoviesData);
                return (
                  <React.Fragment>
                    {!profileLoading && profileData ? (
                      <ProfilePresenter data={profileData} />
                    ) : (
                      <Loading />
                    )}
                  </React.Fragment>
                );
              }}
            </RatedMoviesQueries>
          )}
        </ProfileQueries>
      );
    }
    return null;
  }
}

export default ProfileContainer;
