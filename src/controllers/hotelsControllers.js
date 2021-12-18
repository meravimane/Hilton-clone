const express = require('express');

const Hotel = require('../models/hotelsModel');

const router = express.Router();


router.get("/", async (req, res) =>{
    // console.log(req)
    const page = +req.query.page || 1;
    const size = +req.query.size || 12;

    const skip = (page-1)*size;

    const hotels  = await Hotel.find({city: req.query.city}).skip(skip).limit(size).lean().exec();
    const images = [];
    // return  res.status(200).send({hotels});
    
    hotels.forEach(hotel => {
        if(hotel.image_urls){
            const img = hotel.image_urls
             images.push(img.split("|"));
        }
        
    });

    // console.log(images);
    return  res.render("hilton/index", {hotels});

});



router.get("/search", async (req, res) =>{
    // console.log(req)
    const page = +req.query.page || 1;
    const size = +req.query.size || 12;

    const skip = (page-1)*size;

    const hotels  = await Hotel.find({city: req.query.city}).skip(skip).limit(size).lean().exec();
    const images = [];
    // return  res.status(200).send({hotels});
    
    hotels.forEach(hotel => {
        if(hotel.image_urls){
            const img = hotel.image_urls
             images.push(img.split("|"));
        }
        
    });

    // console.log(images);
    return  res.render("hilton/result", {hotels});

});


router.get("/selectedHotel/:id", async (req, res) =>{
//     console.log(req)

    const hotel  = await Hotel.find({_id: req.params.id}).lean().exec();

    console.log(hotel)
    return  res.render("hilton/selectRate", {hotel});

});





router.get("/selectedHotel/payment/:id", async (req, res) =>{
    //     console.log(req)
    
        const hotel  = await Hotel.find({_id: req.params.id}).lean().exec();
    
        // console.log(query)
        return  res.render("hilton/payment", {hotel});
    
});


router.get("/successfull", async (req, res) =>{
    //     console.log(req)
    
        const guest = req.query
        // console.log(guest)
        return  res.render("hilton/successfull", {guest});
    
});






module.exports = router;




 // const urls = img.split("|");

            // urls.forEach(url =>{
                // async function checkImage(url) {
                //     var request = new XMLHttpRequest();
                //     request.open("GET", url, true);
                //     await request.send();
                //     request.onload = await function() {
                //       status = request.status;
                //       if (request.status == 200) //if(statusText == OK)
                //       {
                //           console.log("found")
                //         images.push(url);
                //       } else {
                //         console.log("image doesn't exist");
                //       }
                //     }
                //   }

                // async function checkImage(url) {
                //     var image = new Image();
                //     image.onload = function() {
                //       if (this.width > 0) {
                //         console.log("image exists");
                //       }
                //     }
                //     image.onerror = function() {
                //       console.log("image doesn't exist");
                //     }
                //     image.src = url;
                //   }
            // })