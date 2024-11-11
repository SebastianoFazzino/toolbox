import {MenuItemType} from './menu-item-type';
import {MenuItem} from '../models/menu-item';

export const menuItems: MenuItem[] = [
  {
    title: 'Base64 Encode',
    icon: 'base64-encode',
    route: 'base64-encode',
    type: MenuItemType.ENCODE
  },
  {
    title: 'Base64 Decode',
    icon: 'base64-decode',
    route: 'base64-decode',
    type: MenuItemType.ENCODE
  },
  {
    title: 'Json Format',
    icon: 'json-format',
    route: 'json-format',
    type: MenuItemType.FORMAT
  },
  {
    title: 'Json Stringify',
    icon: 'json-stringify',
    route: 'json-stringify',
    type: MenuItemType.FORMAT
  }
];
