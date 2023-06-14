import { Body, Controller, Get, Post } from '@nestjs/common';
import { MenuItemsService } from './menu_items.service';
import { MenuItem } from './menu-item.entity';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private menuItemService: MenuItemsService) {}

  @Get()
  async findAll(): Promise<MenuItem[]> {
    return this.menuItemService.findAll();
  }

  @Post()
  async create(@Body() menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemService.create(menuItem);
  }
}
