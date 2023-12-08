const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

router.post("/create", async (req, res) => {
    const { first_name, last_name, email, gender, avatar, domain, available } = req.body;
    if (!first_name || !last_name || !email || !gender || !avatar || !domain || available == null) {
        res.status(404).send("Input required data");
    }

    try {
        const preuser = await users.findOne({ email: email });
        if (preuser) {
            res.status(404).json("User already present");
        }
        else {
            const adduser = new users({
                first_name, last_name, email, gender, avatar, domain, available
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log("user created")
        }
    }
    catch (err) {
        res.status(500).send("Internal server Error", err);
    }
});


router.get("/getdata", async (req, res) => {
    try {
        const {q, g, a} = req.query;
        const data = await users.find();
        const limit = 20;

        const keys = ["first_name", "last_name"];
        
        var userdata = data.filter((item) => {
            return keys.some((key)=> item[key].toLowerCase().includes(q))&&((g=="All")||(item.gender==g))&&((a=="All")||(item.available&&a=="true")||(!item.available&&a=="false"));
        })
        console.log(userdata)
        const pages = (userdata.length + limit - 1) / limit;
        var paginatedData = [];
        for (let i = 0; i < pages; i++) {
            const l = i * limit;
            const r = l + limit;
            const pageData = userdata.slice(l, r);
            paginatedData.push(pageData);
        }

        res.status(201).json(paginatedData);
        console.log(paginatedData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }
});


router.put("/edit/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new:true
        })

        res.status(201).json(updateduser);
    }catch(error){
        res.status(422).json(error);
    }
})

router.delete("/delete/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const deleteduser = await users.findByIdAndDelete({_id:id})

        res.status(201).json(deleteduser);
    }catch(error){
        res.status(422).json(error);
    }
})



module.exports = router;