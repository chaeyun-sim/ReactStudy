const express = require('express');
const router = express.Router();
const multer = require('multer')
const { Product } = require("../models/Product");

//=================================
//            Product
//=================================

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({ storage: storage }).single("file");

router.post ('/image' , (req, res) => {
    upload(req, res, err => {
        if(err) {
            return req.json({ success: false, err})
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })
});

router.post('/', (req, res) => {  //path을 /api/products로 주었음
    const newProduct = new Product(req.body);
    newProduct.save((err) => {
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true})
    })
});

router.post('/products', (req, res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    let findArg = {};

    for(let key in req.body.filters){
        // console.log("key", key)
        if(req.body.filters[key].length > 0){
            findArg[key] = req.body.filters[key]
        }
    }
    
    // console.log("findArg", findArg)

    Product.find(findArg)
    .populate("writer") // 이 사람에 대한 모든 정보를 가져올 수 있음
    .skip(skip)
    .limit(limit)
    .exec((err, productsInfo) => {
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true, productsInfo, postSize: productsInfo.length })
    })
})


module.exports = router;
