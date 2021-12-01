import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
dotenv.config()

import { menu } from './model';
import { MenuController } from './controller/menu';
const menuController = new MenuController(menu);

export const createMenu: Handler = (event: any) => {
  return menuController.create(event);
};

export const deleteMenu: Handler = (event: any) => {
  return menuController.delete(event);
};

export const getAllMenu: Handler = () => menuController.getAll();