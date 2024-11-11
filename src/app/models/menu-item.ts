import {MenuItemType} from '../constants/menu-item-type';

export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  type: MenuItemType;
}
