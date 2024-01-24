import { cardSchema } from "../database/schema/card-creation-schema";

import mongoose from "mongoose";

const cardModel = mongoose.model("card", cardSchema);

export { cardModel };