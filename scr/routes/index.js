const{Router} = require('express');
const router = Router();
const {getArticulos, setArticulos,clearArticulos,ping} = require('../controllers/indexController')


router.get("/update",getArticulos);
router.post("/update",setArticulos);
router.get("/clear",clearArticulos);
router.get("/ping",ping);
module.exports = router;