import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { getProfileData, getRatedMovies } from 'src/types/api';
import { GET_PROFILE_DATA, GET_RATED_MOVIES } from './ProfileQueries';
import Loading from 'src/components/Loading';
import ProfilePresenter from './ProfilePresenter';
import { getMovieList } from 'src/types/local';
import { GET_MOVIE_LIST } from './ProfileQueries.local';

interface IParams {
  userId: string;
}

interface IProps extends RouteComponentProps<IParams> {}

class ProfileQueries extends Query<getProfileData> {}

class MovieListQueries extends Query<getMovieList> {}

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
                const ratedMovieIdList: number[] = new Array();
                if (
                  ratedMoviesData &&
                  ratedMoviesData.GetRatedMovies &&
                  ratedMoviesData.GetRatedMovies.ratedMovies
                ) {
                  const {
                    GetRatedMovies: { ratedMovies }
                  } = ratedMoviesData;
                  if (ratedMovies) {
                    ratedMovies.forEach(ratedMovie => {
                      ratedMovieIdList.push(ratedMovie.movieId);
                    });
                  }
                  console.log('ratedMovieIdList', ratedMovieIdList);
                }
                return (
                  <>
                    {!ratedMoviesLoading && ratedMovieIdList ? (
                      <MovieListQueries
                        query={GET_MOVIE_LIST}
                        variables={{ movieIdList: ratedMovieIdList }}
                      >
                        {({
                          data: movieListData,
                          loading: movieListLoading
                        }) => {
                          console.log(movieListData);
                          console.log('movieListLoading', movieListLoading);
                          return (
                            <React.Fragment>
                              {!profileLoading &&
                              profileData &&
                              !ratedMoviesLoading &&
                              !movieListLoading ? (
                                <ProfilePresenter data={profileData} />
                              ) : (
                                <Loading />
                              )}
                            </React.Fragment>
                          );
                        }}
                      </MovieListQueries>
                    ) : (
                      <Loading />
                    )}
                  </>
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
