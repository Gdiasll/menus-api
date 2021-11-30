import { Context } from "aws-lambda";
import { Model } from "mongoose";
import { CreateMenuDTO } from "../model/dto/createMenuDTO";
import { MenuService } from "../service/menu";
import { MessageUtil } from "../utils/message";

export class MenuController extends MenuService {

    constructor(menu: Model<any>) {
        super(menu);
    }

    async create(event: any, context?: Context) {
        const params: CreateMenuDTO = JSON.parse(event.body);

        try {
            return 'TODO CREATE BR';
        } catch (error) {
            console.error(error);
            return MessageUtil.error(error.code, error.message)
        }
    }

    async delete(event: any) {
        const params: CreateMenuDTO = JSON.parse(event.body);

        try {
            return 'TODO CREATE SERVICE BR';
        } catch (error) {
            console.error(error);
            return MessageUtil.error(error.code, error.message)
        }
    }

    async getAll() {
        try {
            return 'TODO CREATE SERVICE BR';
        } catch (error) {
            console.error(error);
            return MessageUtil.error(error.code, error.message)
        }
    }
}