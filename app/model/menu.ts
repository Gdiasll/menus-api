import mongoose, { Schema } from 'mongoose';
import Inc from 'mongoose-sequence';

const AutoIncrement = Inc(mongoose);
function autoPopulateSubmenus(next) {
    this.populate('submenus');
    next();
}

export type MenuDocument = mongoose.Document & {
    id: number,
    name: string,
    path: string,
    submenus: MenuDocument[],
};

const menuSchema = new mongoose.Schema({
    name: String,
    submenus: [{ type: Schema.Types.ObjectId, ref: 'menu' }],
    path: { type: String },
}, { versionKey: false, });

menuSchema
    .pre('findOne', autoPopulateSubmenus)
    .pre('find', autoPopulateSubmenus)
    .plugin(AutoIncrement, { inc_field: 'id' });

export const menu = (mongoose.models.menu ||
    mongoose.model<MenuDocument>('menu', menuSchema, process.env.DB_MENU_COLLECTION)
);