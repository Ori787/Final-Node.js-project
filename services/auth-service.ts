import { Ijwtpayload } from "../@types/user-signup";

import jwt from "jsonwebtoken";

import bcrypt from 'bcrypt';


const authService = {
generateJWT: (payload: Ijwtpayload) => {
    const secret = "zfiaIUSf23mSZ5skW1qJ/0mfCgLrtT2+jSX7ahsfnu!%!131A0%&Yl";
    return jwt.sign(payload, secret)
  },

hashPassword: async (userPassword: string) => {
    try {
const hashedPassword = await bcrypt.hash(userPassword, 12);
return hashedPassword;
  } catch (err) {
    console.error("an error occured while trying to hash the password", err);
    throw err;
  }
  },

verifyJWT: (token: any) => {
  const secret = "zfiaIUSf23mSZ5skW1qJ/0mfCgLrtT2+jSX7ahsfnu!%!131A0%&Yl";

  const payload = jwt.verify(token, secret);

  return payload as Ijwtpayload;
},
};
 


export { authService as auth };