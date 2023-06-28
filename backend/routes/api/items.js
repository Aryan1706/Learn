import express from "express";
const router = express.Router()

//Item Model
import  Item  from "../../models/Item";
import { async } from "regenerator-runtime";
import { error } from "console";

// @route  GET /items
// @desc   GET All items
// @access Public

router.get('/',async(req,res)=>{
    try {
        const items = await Item.find();
        if (!items) throw Error('No items');
    
        res.status(200).json(items);
      } catch (e) {
        res.status(400).json({ msg: e.message });
      }
})

export default router;