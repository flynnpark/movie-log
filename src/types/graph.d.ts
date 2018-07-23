export const typeDefs = ["type Movie {\n  title: String!\n  year: Int!\n}\n\ntype Query {\n  movie: Movie!\n}\n"];
/* tslint:disable */

export interface Query {
  movie: Movie;
}

export interface Movie {
  title: string;
  year: number;
}
