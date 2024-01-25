import { Router } from "express";

import { cardModel } from "../model/card-creation-model";

import { userAuth } from "../middleware/is-user";

import { validateCard } from "../middleware/validation";

import { validateToken } from "../middleware/token-extraction";


const router = Router();


router.get("/" , async (req, res, next) => {

    try {
    const allCards = await cardModel.find();
    res.json(allCards);
    }

     catch (err) {
    console.error("an error occured", err);
    res.status(400).json({ error: "Bad Request"});
    };
    
    });


    router.get("/my-cards", validateToken, async (req, res, next) => {

        try {
        const myCards = await cardModel.find();
        res.json([myCards]);
        }

         catch (err) {
        console.error("an error occured", err);
        res.status(400).json({ error: "Bad Request"})
        };

        });


    router.get("/:_id" , async (req, res, next) => {

        try {
        const { _id } = req.params;
        const card = await cardModel.findById(_id);
        res.json(card);
        }

         catch (err) {
            console.error("an error occured", err);
            res.status(400).json({ error: "Bad Request"})
        };

        });


        router.post("/", validateCard, async (req, res, next) => {
            
            try {
            const newCard = new cardModel({...req.body});
            const savedCard = await newCard.save();
            res.status(200).json(savedCard);
            } 

            catch (err) {
                console.error("an error occured", err);
                res.status(400).json({ error: "Bad Request"})
            };

            });


            router.put("/:_id" , async (req, res, next) => {

                try {
                const { _id } = req.params;
                const card = await cardModel.findByIdAndUpdate(_id,
                     req.body,
                     {new: true});
                     res.json(card);
                }

                 catch (err) {
                    console.error("an error occured", err);
                    res.status(400).json({ error: "Bad Request"})
                };

                });

                router.patch("/:_id", async (req, res, next) => {
                    try {
                        const { _id } = req.params;
                        const myCard = await cardModel.findById(_id);
                        const name = req.user.name;
                        const likedBy = `${name}`;
                
                        if (!myCard) {
                            return res.status(404).json({ error: "Card not found" });
                        }
                

                        myCard.likes.push(likedBy); 
                
                        await myCard.save();
                                        res.json({ message: "Like added successfully", card: myCard });
                    } catch (err) {
                        console.error("An error occurred", err);
                        res.status(500).json({ error: "Internal Server Error" });
                    }
                });


                    router.delete("/:_id" , async (req, res, next) => {
                        try {
                            const { _id } = req.params;
                        const deleteCard = await cardModel.findByIdAndDelete(_id);
                        res.status(200).json(deleteCard);
                        } catch (err) {
                            console.error("an error occured while trying to delete this card", err);
                            res.status(400).json({ error: "Bad Request"})
                        }
                        });


                        export {router as cardsRouter};
