import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
class Movie extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  poster_path: string;

  @Column()
  original_language: string;

  @Column()
  original_title: string;

  @Column()
  adult: boolean;

  @Column()
  overview: string;

  @Column({ type: 'date' })
  release_date: Date;
}

export default Movie;
