import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
class MovieScore extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() movieId: number;

  @Column() score: number;

  @CreateDateColumn() createdAt: number;
}

export default MovieScore;
