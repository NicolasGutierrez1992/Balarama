const{Router} = require('express');
const router = Router();
const {getArticulos, setArticulos,clearArticulos} = require('../controllers/indexController')


router.get("/update",getArticulos);
router.post("/update",setArticulos);
router.get("/clear",clearArticulos);
module.exports = router;