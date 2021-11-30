import mongoose, { Schema } from 'mongoose';

export type MenuDocument = mongoose.Document & {
    id: number,
    name: string,
    submenus: MenuDocument[],
};

const menuSchema = new mongoose.Schema({
    id: { type: Number, index: true, unique: true },
    name: String,
    submenus: { type: Schema.Types.ObjectId, ref: 'menu' }
});

export const menu = (mongoose.models.menu ||
    mongoose.model<MenuDocument>('menu', menuSchema, process.env.DB_MENU_COLLECTION)
);