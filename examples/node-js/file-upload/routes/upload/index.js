const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }
    }),
    limits:{fileSize:5*1024*1024}, //5mb
});

router.get('/show',(req,res,next)=>{
    res.render('index');
});

// upload.array('img') 여러개
router.post('/create',upload.single('imgFile'),(req,res,next)=>{
    let file = req.file;
    
    let result = {
        originalName : file.originalname,
        size:file.size,
    }

    res.json(result);
});

module.exports = router;