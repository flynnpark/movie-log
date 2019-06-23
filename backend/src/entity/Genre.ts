import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class Genre extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;
}

export default Genre;
