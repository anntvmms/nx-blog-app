import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('blog')
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  newsTitle: string;
  @Column()
  detailsContent: string;
  @CreateDateColumn({
    type: 'timestamp',
    precision: null,
    default: () => 'NOW()',
  })
  doj: Date;
  @Column()
  category: string;
}
