const db = require('../configuration/mongoose');
const Crud= require('../models/crud');


module.exports.crud=function(req,res){
    Crud.find({},function(err,crud){
        if(err){
            console.log(err);
            return;
        }
        return res.render('crud',{
            title : "crud",
            CrudList : crud
        });
    });
};



module.exports.newCrud=function(req,res){
    
    Crud.create({
        name : req.body.name,
        email : req.body.email,
        phoneno : req.body.phoneno,
        dateofbirth : req.body.dateofbirth,  
        pincode : req.body.pincode ,
        status : "display"

    }, function(err,newCrud){
        if(err){
            console.log(err)

        }
        console.log(newCrud);
        return res.redirect('back');
    });
}


module.exports.deleteCrud = function(req,res){
    Crud.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log(err);
            }
            return res.redirect('back');
    });
};
