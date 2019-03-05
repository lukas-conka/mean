import {Document, Schema, Model, model} from 'mongoose';
import { IUser } from "../../src/user";


export var UserSchema: Schema = new Schema({
    nome: String,
    login: String,
    senha: String
});

const User = model<IUser>('User', UserSchema);

export default User;
