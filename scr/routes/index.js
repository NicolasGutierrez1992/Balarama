const{Router} = require('express');
const router = Router();
const {createTableWeb,truncateArticulosWeb,setArticulosWeb,getArticulos, setArticulos,ping,createTable,truncateArticulos} = require('../controllers/indexController')


router.get("/update/:codebar",getArticulos);//Trae el precio de del producto
router.get("/update",getArticulos);//Trae los precios almacenados en la tabla web

router.post("/update",setArticulos);//Guarda la lista de precios local en la web
router.post("/updateWeb",setArticulosWeb);//Guarda el precio nuevo en tabla Web

router.get("/ping",ping);//Prueba conexion

router.get("/create",createTable);//Crea la tabla para la lista de precios local
router.get("/createWeb",createTableWeb);//Crea la tabla web

router.get("/truncate",truncateArticulos);//vacia la lista de precios local
router.get("/truncateWeb",truncateArticulosWeb);//vacia la tabla web

module.exports = router;