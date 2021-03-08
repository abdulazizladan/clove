import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seller_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  unit: string;

  @Column()
  unit_price: number;

  @Column()
  uploaded_at: Date;
}
