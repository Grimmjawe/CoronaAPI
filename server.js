const express = require("express");
const ejs = require("ejs");
const axios = require("axios");
const app = express();

app.use(express.static("public"));

app.set("view engine", ejs);

app.get("/corona", (req,res)=>{
    const url = "https://api.thevirustracker.com/free-api?countryTimeline=EE";
    axios.get(url).then((resp)=>{
        let countryData = resp.data;
        let dates = resp.data.timelineitems[0];
        res.render("index.ejs", {data: countryData, date: dates});
    }).catch((err)=>{
        console.log(err);
    })
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});