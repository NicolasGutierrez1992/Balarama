
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

  try {
      console.log("Entra a getArticulos");
      let response ;
      let query;
      if(req.params.codebar){
        console.log("consulto CodBar " + req.params.codebar);
        query = "select * from ArticulosPG where codbar =' " + req.params.codebar+"'";
        console.log("query " + query);
        response =  await pool.query(query);
      }else{
        console.log("consulto update 1 " );
        response =  await pool.query("select * from ArticulosPG where Update = 1");
      }
      
      console.log("Devuelvo ");
      console.log(response.rows);
      res.status(200).json(response.rows);
  } catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
}


const setArticulos = async (req,res)=>{
   
  try {
      console.log("Entra a setArticulos");
      let articulo = {...req.body}
      console.log(articulo);
      const query = "INSERT INTO ArticulosPG (CodBar,Nombre,Precio,Update) VALUES ( '" + articulo.Codbar +"','"+ articulo.Nombre +"',"+ articulo.Precio +","+ articulo.Update + ");";
      console.log(query);
      const response = await pool.query(query);
      res.status(200).json("ARTICULO AGREGADO");  
  } catch (error) {
      res.status(500).json(error);
  }

}
  
  const clearArticulos = async (req,res)=>{
    try {
        console.log("Entra a clearArticulos");
        const query = "Update ArticulosPG SET Update = 0 ;";
        console.log(query);
        const response = await pool.query(query);
        res.status(200).json("ARTICULOS ACTUALIZADOS");
    } catch (error) {
        res.status(500).json(error);
    }
  }

  const truncateArticulos = async (req,res)=>{
    try {
        console.log("Entra a truncateArticulos");
        const query = "truncate table ArticulosPG;";
        console.log(query);
        const response = await pool.query(query);
        res.status(200).json("ARTICULOS ELIMINADOS");
    } catch (error) {
        res.status(500).json(error);
    }
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
        const query = "CREATE TABLE ArticulosPG( CodBar  varchar(40), Nombre varchar(40),  Precio float, Update int);";
        const response = await pool.query(query);
        res.status(200).json(response.rows[0]);
    }catch(err){
        res.status(500).json(err);
    }
  }

  const updateArticulos = async ( req, res)=>{
    try {
        console.log("Entra a updateArticulos");
        let articulo = {...req.body}
        console.log(articulo);
        const query = "update Articulos SET Precio = '"+articulo.Precio+"' , Nombre = '" + articulo.Nombre+"');";
        console.log(query);
        const response = await pool.query(query);
        res.status(200).json("ARTICULO ACTUALIZADO");
    } catch (err) {
       res.status(500).json(err);
    }
  }

module.exports={
    getArticulos,
    setArticulos,
    clearArticulos,
    ping,
    createTable,
    updateArticulos,
    truncateArticulos
  }