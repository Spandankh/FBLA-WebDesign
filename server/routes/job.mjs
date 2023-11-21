import express from "express";
import db from "../db/conn.mjs";


const router = express.Router();


router.get("/", async (req, res) => {
    let collection = await db.collection("Span");
    let results = await collection.find({})
      .toArray();
    res.send(results).status(200);
  });

router.post("/", async(req, res) => {
  let collection = await db.collection("Span");
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
})



export default router;