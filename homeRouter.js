const express = require('express');
const Router = express.Router();
const homeSchema = require('./models/homeschema');

Router.get("/",(err,res)=>{
    res.render('account',{password:'',email:''})
})
Router.get("/index.html",(err,res)=>{
    res.render('index',{password:'',email:''})
})
// Router.get("/index",(err,res)=>{
//     res.render('index',{password:'',email:''})
// })
Router.get("/about",(err,res)=>{
    res.render('about',{password:'',email:''})
})
Router.get("/contact",(err,res)=>{
    res.render('contact',{password:'',email:''})
})
Router.get("/about.html",(err,res)=>{
    res.render('about',{password:'',email:''})
})
Router.get("/contact.html",(err,res)=>{
    res.render('contact',{password:'',email:''})
})
Router.get("/account.html",(err,res)=>{
    res.render('account',{password:'',email:''})
})
Router.get("/account",(err,res)=>{
    res.render('account',{password:'',email:''})
})
Router.get("/cart",(err,res)=>{
    res.render('cart',{password:'',email:''})
})
Router.get("/cart.html",(err,res)=>{
    res.render('cart',{password:'',email:''})
})
Router.get("/vegetable.html",(err,res)=>{
    res.render('vegetable',{password:'',email:''})
})
Router.get("/fruit.html",(err,res)=>{
    res.render('fruit',{password:'',email:''})
})
Router.get("/home-made.html",(err,res)=>{
    res.render('home-made',{password:'',email:''})
})
Router.get("/product.ejs",(err,res)=>{
    res.render('product',{password:'',email:''})
})
Router.get("/product-detail.html",(err,res)=>{
    res.render('product-detail',{password:'',email:''})
})
Router.post('/register',async (req,res)=>{
    try{
        const {
                name,
                email,
                password,
                cpassword
        } = req.body;
        console.log(name)

        if( password===cpassword)
        {
            const userdata = new homeSchema({

                name,
                email,
                password
            })
            userdata.save(err=>{
                if(err)
                {
                    
                    res.render('account',{title:'',password:'Email Already Used',email:''})
                }
                else{
                    res.render('account',{title:'Done',password:'Done',email:''})
                }
            })
        }
        else{
            res.render('account',{password:'Password doesnot match',email:''})
        }
    }
    catch(error){
        res.render('account',{password:'',email:''})
    }
})

Router.post('/login',(req,res)=>{
    const{
        email,
        password
    } = req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        if(email === result.email && password === result.password)
        {
            res.render('index')
        }else{
            console.log(err)
        }
})
})

module.exports = Router;