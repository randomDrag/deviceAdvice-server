const express = require('express');
const sc = require('http-status-codes');

let route = express.Router();

//models
const Mobilemodel = require('../models/phone.model');

route.post("/new",async (req,res)=>{

 try{

     let mm = new Mobilemodel(req.body);
     console.log(req.body);

     await mm.save((err)=>{
         if(!err){
             res.status(sc.OK).json({msg: true});
         }else{
            res.status(sc.INTERNAL_SERVER_ERROR).json({msg: false,
            err:err});
         }
     });


 }   catch(e){

    res.status(sc.INTERNAL_SERVER_ERROR).json({msg: false});
 }

});


route.get('/', async (req,res)=>{

    let {price,q1,q2} = req.query;

    let Q1 = {[q1] : "-1"} ;
    let Q2 = {[q2] : "-1"} ;
         
    try{
       
            
    await  Mobilemodel.find({PRICE:price,
        GAMING_RATING : {$gt:60}}).sort(Q1).sort(Q2).exec((err,doc)=>{

     
            if(!err){
                res.status(sc.OK).json({msg: true,
                                        data : doc});
            }else{
               res.status(sc.INTERNAL_SERVER_ERROR).json({msg: false,
               err:err.message});
            }
     
            });


    }catch(e){
        res.status(sc.INTERNAL_SERVER_ERROR).json({msg: false,
            err:e.message});
    }



});


module.exports = route;