require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const port = 5000;
const cartoon = require("./cartoon");

mongoose
.connect(process.env.MONGODB)
.then(() => console.log("db connected"));

app.get("/", (req,res)=>res.send("<a href='./cartoons'>Cartoon List</a>"));

app.get("/cartoons", async (req,res)=>{
    const cartoonx = await cartoon.find({},{ name: true });
    if (cartoonx.length == 0) {
        return res.json({data : "No Cartoon Found"});
    }
    return res.json({data : cartoonx});
});

app.post("/cartoon/add", (req,res) =>  {
    const { newCartoon } = req.body;
    cartoon.create(newCartoon);
    return res.json( {data :"Cartoon Added Successfully !" });
});

app.put("/deletecartoon/:cname", async (req,res) => {
    const deleteduser = await Cartoon.findOneAndDelete(
        {name:cname}
    );
    return res.json({ data:"cartoon deleted successfully !"});
});

app.listen(port, () => console.log(`Example app listening on port 5000!`));