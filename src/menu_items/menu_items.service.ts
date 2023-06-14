import { Injectable } from '@nestjs/common';
import { MenuItem } from './menu-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(MenuItem)
    private menuItemRepository: Repository<MenuItem>,
  ) {}

  findAll(): Promise<MenuItem[]> {
    return this.menuItemRepository.find();
  }

  findOne(id: string): Promise<MenuItem | null> {
    return this.menuItemRepository.findOneBy({ id });
  }

  async create(menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemRepository.save(menuItem);
  }

  async update(menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemRepository.save(menuItem);
  }

  async remove(id: string): Promise<void> {
    await this.menuItemRepository.delete(id);
  }
}
