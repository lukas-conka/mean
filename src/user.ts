import {Document} from 'mongoose';

export interface IUser extends Document {
    nome?: string;
    login?: string;
    senha?: string;
};