import { Iimage, Iaddress } from "./user-signup"

type Icardinput = {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: Iimage;
    address: Iaddress;
};

type Icard = Icardinput & {
    likes: string[];
    createdAt: Date;
    _id?: string;
    bizNumber?: number;
userId?: string;
};

export { Icardinput, Icard };