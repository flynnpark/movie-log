import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm';

@Entity()
class MovieRating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  userId: number;

  @Column({ type: 'float' })
  rating: number;

  @CreateDateColumn()
  createdAt: number;
}

export default MovieRating;
