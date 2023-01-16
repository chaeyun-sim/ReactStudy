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
    let term = req.body.searchTerm;
    let findArg = {};

    for(let key in req.body.filters){
        if(req.body.filters[key].length > 0){
            console.log(key)
            if (key === "price"){
                findArg[key] = {
                    $gte: req.body.filters[key][0],  //gte : 이거보다 크거나 같은
                    $lte: req.body.filters[key][1],  //lte : 이거보다 작거나 같은
                }
            } else {
                findArg[key] = req.body.filters[key];
            }
        }
    }
    
    // console.log("findArg", findArg)

    if (term){
        Product.find(findArg)
        .find({ $text: { $search: term }}) // 텍스트의 일치유무 추가
            .populate("writer") // 이 사람에 대한 모든 정보를 가져올 수 있음
            .skip(skip)
            .limit(limit)
            .exec((err, productsInfo) => {
                if(err) return res.status(400).json({ success: false, err})
                return res.status(200).json({ success: true, productsInfo, postSize: productsInfo.length })
            }
        )
    } else {
        Product.find(findArg)
            .populate("writer") // 이 사람에 대한 모든 정보를 가져올 수 있음
            .skip(skip)
            .limit(limit)
            .exec((err, productsInfo) => {
                if(err) return res.status(400).json({ success: false, err})
                return res.status(200).json({ success: true, productsInfo, postSize: productsInfo.length })
            }
        )
    }
})


module.exports = router;
