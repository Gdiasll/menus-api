import { Model } from 'mongoose';
import { CreateMenuDTO } from '../model/dto/createMenuDTO';

export class MenuService {
    private menu: Model<any>;
    
    constructor(menu: Model<any>) {
        this.menu = menu;
    }

    protected async createMenu({ name, relatedId = 0 }: CreateMenuDTO): Promise<object> {
        try {
            const newMenu = await this.menu.create({ name });
            if(relatedId) await this.menu.updateOne({ id: relatedId }, { $push: { submenus: newMenu._id } });
            return newMenu;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    protected async deleteMenu(id: number): Promise<object> {
        try {
            return this.menu.deleteOne({ id });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    protected async findById(id: number): Promise<object> {
        try {
            return this.menu.findOne({ id })
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    protected async getAllMenu(): Promise<object> {
        try {
            return await this.menu.find();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}