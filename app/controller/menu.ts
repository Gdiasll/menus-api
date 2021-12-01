import { Context } from "aws-lambda";
import { Model } from "mongoose";
import { CreateMenuDTO } from "../model/dto/createMenuDTO";
import { MenuService } from "../service/menu";
import { MessageUtil } from "../utils/message";

export class MenuController extends MenuService {

    constructor(menu: Model<any>) {
        super(menu);
    }

    async create(event: any) {
        const params: CreateMenuDTO = JSON.parse(event.body);

        try {
            if (params.relatedId) {
                const idExists = await this.findById(params.relatedId);
                if (!idExists) return MessageUtil.error(403, 'parentId not exist');
            }

            const newMenu: any = await this.createMenu({ name: params.name, relatedId: params.relatedId });
            return MessageUtil.created({ id: newMenu.id });
        } catch (error) {
            console.error(error);
            return MessageUtil.error(error.code, error.message)
        }
    }

    async delete(event: any) {
        const id: number = event.pathParameters.id;

        try {
            const idExists = await this.findById(id);
            if (!idExists) return MessageUtil.error(404, 'id not found');
            const deletedMenu = await this.deleteMenu(id);
            return MessageUtil.success(deletedMenu);
        } catch (error) {
            console.error(error);
            return MessageUtil.error(error.code, error.message)
        }
    }

    async getAll() {
        try {
            const data = await this.getAllMenu();
            return MessageUtil.success(data);
        } catch (error) {
            console.error(error);
            return MessageUtil.error(error.code, error.message)
        }
    }
}