import { Model } from 'mongoose';
import { MenuDocument } from '../model';

export class MenuService {
    private menu: Model<any>;

    constructor(menu: Model<any>) {
        this.menu = menu;
    }

    protected async createMenu({
        name,
        parentId = null,
        parentPath = '',
    }: {
        name: string,
        parentId?: string,
        parentPath?: string,
    }): Promise<object> {

        const pathSeparator = (parentPath && parentPath.length) ? '#' : '';
        const payload = {
            name: name,
            path: parentId ? parentPath + pathSeparator + parentId : null,
        };
        const newMenu: MenuDocument = await this.menu.create(payload);

        if (parentId)
            await this.menu.updateOne({ _id: parentId }, { $push: { submenus: newMenu } });
        return newMenu;
    }

    protected async deleteMenu(_id: string): Promise<object> {
        const childMenus: string[] = await this.fetchChilds(_id);
        await this.menu.updateMany({}, { $pull: { submenus: _id } });
        return this.menu.deleteMany({ _id: { $in: [_id, ...childMenus] } });
    }

    protected async findById(id: number): Promise<MenuDocument> {
        return this.menu.findOne({ id });
    }

    private async fetchChilds(_Id: string): Promise<string[]> {
        const childs: MenuDocument[] = await this.menu.find({ path: { $regex: '.*' + _Id + '.*' } });
        return childs.map((menu: MenuDocument) => menu._id);
    }

    protected async getAllMenu(): Promise<object> {
        return this.menu.find({ path: null });
    }
}