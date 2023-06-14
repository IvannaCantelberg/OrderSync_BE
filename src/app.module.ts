import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { ClientService } from './client/client.service';
import { OrdersModule } from './orders/orders.module';
import { MenuItemsModule } from './menu_items/menu_items.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'SyncOrders',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    ClientsModule,
    OrdersModule,
    MenuItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ClientService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
