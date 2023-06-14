import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { MenuItem } from './menu-item.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => MenuItem, (menuItem) => menuItem.tags)
  menuItems: MenuItem[];
}
