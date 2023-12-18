
const{Pool} = require('pg');

const pool = new Pool ({
    connectionString:process.env.DATABASE_URL,
    //ssl: true
    //host: 'localhost'    
    //user:'balarama',
    password:'FOPRNTJ4At5zTyKKVLLthW8tUEqskNeN',
    database:'apiprice',
    port:'5432'
   //postgres://balarama:FOPRNTJ4At5zTyKKVLLthW8tUEqskNeN@dpg-cm03sita73kc73bvmll0-a.oregon-postgres.render.com/apiprice
    //host: 'dpg-cm03sita73kc73bvmll0-a'
    
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
  
  const ping = async (req,res)=>{
    try{
        const query = "SELECT NOW();";
        const response = await pool.query(query);
          res.status(200).json(response.rows[0]);
    }catch(err){
        res.status(500).json(err);
    }
  }
  
    
  const createTable = async (req,res)=>{
    try{
        const query = "CREATE TABLE recordsArticulos( CodBar int, Nombre varchar(40),  Precio float);";
        const response = await pool.query(query);
          res.status(200).json(response.rows[0]);
    }catch(err){
        res.status(500).json(err);
    }
  }

module.exports={
    getArticulos,
    setArticulos,
    clearArticulos,
    ping,
    createTable
}