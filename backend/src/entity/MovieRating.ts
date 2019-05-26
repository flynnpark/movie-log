import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
class MovieRating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  userId: number;

  @Column({ type: 'float', nullable: false })
  rating: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  watchDate: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}

export default MovieRating;
