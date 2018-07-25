export const typeDefs = ["type User {\n  id: Int!\n  email: String!\n  password: String!\n  name: String!\n  birthYear: Int!\n  profileImage: String\n  createdAt: Int!\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  birthYear: number;
  profileImage: string | null;
  createdAt: number;
}
