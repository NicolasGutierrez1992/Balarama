const{Router} = require('express');
const router = Router();
const {getArticulos, setArticulos,clearArticulos,ping,createTable} = require('../controllers/indexController')


router.get("/update",getArticulos);
router.post("/update",setArticulos);
router.get("/clear",clearArticulos);
router.get("/ping",ping);
router.get("/create",createTable);
module.exports = router;