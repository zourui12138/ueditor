import express from 'express'
const router = express.Router();

router.use("/abc",function (req,res,next){
    res.render('index');
});
module.exports = router;