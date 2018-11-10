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

  @Column({ type: 'float', nullable: true })
  rating: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}

export default MovieRating;
