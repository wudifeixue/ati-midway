// entity/photo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('photo_table_name')
export class Photo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    name: 'custom_name'
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdDate: Date;
}
