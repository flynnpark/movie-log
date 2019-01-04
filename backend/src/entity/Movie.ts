import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm';
import Genre from './Genre';

@Entity()
class Movie extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  tagline: string;

  @Column({ nullable: true })
  poster_path: string;

  @Column()
  original_language: string;

  @Column()
  original_title: string;

  @ManyToMany(type => Genre)
  @JoinTable()
  genres: Genre[];

  @Column()
  adult: boolean;

  @Column()
  overview: string;

  @Column()
  runtime: number;

  @Column({ type: 'date' })
  release_date: Date;
}

export default Movie;
