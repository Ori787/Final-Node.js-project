import { cardModel } from "../model/card-creation-model";
import { UserModel } from "../model/user-signup-model";
import { users } from "./users";
import { cards } from "./cards";
const initDB = async () => {

  //users
  const usersCount = await UserModel.countDocuments();
  if (usersCount != 0) return;

  for (let user of users) {
    try {
    const saved = await new UserModel(user).save();
console.log("Added user: ", saved);
    } catch (error) {
        console.error("Error adding user: ", error);
    }
  }

//cards
const cardsCount = await cardModel.countDocuments();
if (cardsCount != 0) return;

for (let card of cards) {
    try {

  const saved = await new cardModel(card).save();
console.log("Added card: ", saved);

         } catch (error) {

        console.error("Error adding user: ", error);
    }
    }
};

export { initDB };