import { Model } from 'mongoose';
import { CreateMenuDTO } from '../model/dto/createMenuDTO';

export class MenuService {
    private menu: Model<any>;
    
    constructor(menu: Model<any>) {
        this.menu = menu;
    }

    protected async createMenu(params: CreateMenuDTO): Promise<object> {
        try {
            return { message: 'TODO' }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    protected async deleteMenu(id: number): Promise<object> {
        try {
            return { message: 'TODO' }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    protected async getAllMenu(): Promise<object> {
        try {
            return { message: 'TODO' }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}