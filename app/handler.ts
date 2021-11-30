import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
const dotenvPath = '../.env';
dotenv.config({ path: dotenvPath });

import { menu } from './model';
import { MenuController } from './controller/menu';
const menuController = new MenuController(menu);

export const createMenu: Handler = (event: any, context: Context) => {
  return menuController.create(event, context);
};

export const deleteMenu: Handler = (event: any) => {
  return menuController.delete(event);
};

export const getAllMenu: Handler = () => menuController.getAll();