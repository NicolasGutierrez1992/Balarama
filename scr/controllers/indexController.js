
const{Pool} = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user:'postgres',
    password:'postgres',
    database:'price',
    port:'5432'
})



const getArticulos = async (req,res)=>{
  
        console.log("Entra a getArticulos");
        const response =  await pool.query("select * from recordsArticulos");
        console.log("Devuelvo ");
        console.log(response.rows);
        res.status(200).json(response.rows);
   
}


const setArticulos = async (req,res)=>{
    console.log("Entra a setArticulos");
    let articulo = {...req.body}
    console.log(articulo);
    const query = "INSERT INTO recordsArticulos (CodBar,Nombre,Precio) VALUES ( " + articulo.Codbar +",'"+ articulo.Nombre +"',"+ articulo.Precio +");";
    console.log(query);
    const response = await pool.query(query);
      res.status(200).json("ARTICULO AGREGADO");
  }
  
  const clearArticulos = async (req,res)=>{
    console.log("Entra a clearArticulos");
    let articulo = {...req.body}    
    const query = "TRUNCATE TABLE recordsArticulos ;";
    console.log(query);
    const response = await pool.query(query);
      res.status(200).json("ARTICULOS ELIMINADOS");
  }
  


module.exports={
    getArticulos,
    setArticulos,
    clearArticulos
}