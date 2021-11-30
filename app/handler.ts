import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
const dotenvPath = '../.env';
dotenv.config({ path: dotenvPath });

export const createMenu: Handler = (event: any, context: Context) => {
  return new Promise(() => 'TODO CREATE');
};

export const deleteMenu: Handler = (event: any) => {
  return new Promise(() => 'TODO DELETE');
};

export const getAllMenu: Handler = () => {
  return new Promise(() => ({ message: 'TODO FIND' }))
}