import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MenuItem } from '../menu_items/menu-item.entity';
import { Client } from 'src/clients/client.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalPrice: number;

  @ManyToOne(() => Client, (client) => client.orders)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.orders)
  @JoinColumn({ name: 'menu_item_id' })
  menuItem: MenuItem;
}
