const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"Lenovo",
        img:"https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvfGVufDB8fDB8fHww" ,
        price: 130000,
        desc: "very costly, aukaat ke bahar" 
    },
    {
        name:"Macbook",
        img:"https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
        price: 250000 , 
        desc:"ye to bilkul hi aukaatke bahar"
    },
    {
        name:"Dell",
        price:51000,
        img:"https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"ye sasta hai lelo"
    },
    {
        name:"Asus", 
        img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN1c3xlbnwwfHwwfHx8MA%3D%3D", 
        price: 237900, 
        desc: "life mein kuch cheese sirf dekhne ke liye hota hai"
    },
    {
        name:"Acer" , 
        img:"https://images.unsplash.com/photo-1525971977907-20d22da82d6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNlcnxlbnwwfHwwfHx8MA%3D%3D" , 
        price: 25000 ,
        desc: "badiya hai kamao kamao"
    }
]

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;


