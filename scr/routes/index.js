const{Router} = require('express');
const router = Router();
const {getArticulos, setArticulos,clearArticulos,ping,createTable,updateArticulos,truncateArticulos} = require('../controllers/indexController')


router.get("/update/:codebar",getArticulos);
router.post("/update",setArticulos);
router.get("/clear",clearArticulos);
router.get("/ping",ping);
router.get("/create",createTable);
router.get("/truncate",truncateArticulos);
router.get("/updateArticulos",updateArticulos);
module.exports = router;