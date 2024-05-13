import express from 'express'
import products from '../data/products.json' assert {type: json}

//การใช้ assert ในการ import JSON เป็นการระบุประเภทของข้อมูลที่กำลังนำเข้า (import) เพื่อให้โมดูลรู้ว่าไฟล์ที่กำลังนำเข้านั้นมีลักษณะเป็น JSON-


const productsRouter = express.Router()


productsRouter.route("/").get((req,res)=>{
    res.render("products",{
        products
});

});



productsRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("products", {
        product: products[id]
    })
})

module.exports = productsRouter;