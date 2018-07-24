export const typeDefs = ["type MovieResponse {\n  title: String!\n  year: Int!\n}\n\ntype Query {\n  movie(name: String!): MovieResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  movie: MovieResponse;
}

export interface MovieQueryArgs {
  name: string;
}

export interface MovieResponse {
  title: string;
  year: number;
}
