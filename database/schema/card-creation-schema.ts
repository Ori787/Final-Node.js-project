import { Icard, Icardinput } from "../../@types/cards-type";

import { addressSchema } from "./address-schema";

import { imageSchema } from "./image-schema";

import { nameSchema } from "./name-schema";

import { Schema } from "mongoose";

const cardSchema = new Schema<Icard>({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: addressSchema, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    web: { type: String, required: true },
    image: { type: imageSchema },
    userId: { type: String, required: true },
    bizNumber: 
    { type: Number,
         required: false,
         default: () => Math.round(Math.random() * 1_000_000),
         unique: true,
        },
    createdAt: {
        type: Date,
        required: false,
        default: new Date(),
    },
    likes: [
       {
        type: String,
       },
    ],
});

export { cardSchema };