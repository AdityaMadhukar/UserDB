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
        res.status(404).send(err);
    }
});


router.get("/getdata", async (req, res) => {
    try {
        const {q, g, a} = req.query;
        console.log(a);
        const data = await users.find();
        const limit = 20;

        const keys = ["first_name", "last_name"];
        
        var userdata = data.filter((item) => {
            return keys.some((key)=> item[key].toLowerCase().includes(q))&&((g=="All")||(item.gender==g))&&((a=="All")||(item.available&&a=="true")||(!item.available&&a=="false"));
        })

        const pages = (userdata.length + limit - 1) / limit;
        var paginatedData = [];
        for (let i = 0; i < pages; i++) {
            const l = i * limit;
            const r = l + limit;
            const pageData = userdata.slice(l, r);
            paginatedData.push(pageData);
        }

        res.status(201).json(paginatedData);
        // console.log(paginatedData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }
});



module.exports = router;