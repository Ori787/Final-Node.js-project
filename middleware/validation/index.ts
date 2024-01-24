import { schemaValidation } from "./validate-schema";

import { userJoi } from "../../joi/user-joi";

import { loginJoi } from "../../joi/login";

import { joiCardSchema } from "../../joi/card-joi";


const validateSignUp = schemaValidation(userJoi);

const validateLogin = schemaValidation(loginJoi);

const validateCard = schemaValidation(joiCardSchema);


export { validateSignUp, validateLogin, validateCard } ;