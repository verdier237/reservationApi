const express = require("express")
const {createRes,getOneRes,getRes,updateRes} = require('../Controller/res')
const {protect} = require('../middleware/auth')
const router = express.Router();

router.route('')
        .get(protect,getRes)
        .post(protect,createRes)
        .put(protect,updateRes)
        .delete()
router.route('/specific')
        .get(protect,getOneRes)


module.exports = router;

