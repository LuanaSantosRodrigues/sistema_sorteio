const express = require("express");
const connection = require("./db/conn");
const app = express();
const PORT = 8080;

//view enginenode
app.set('view engine','ejs')




connection.authenticate().then(
    () =>{

    }
).catch(
    (erro)=>{
        console.log(erro)
    }
)

 
app.get("/", (req, res) => {
    res.render("index");
})
 
app.listen(PORT, () => {
    console.log(`rodando http://localhost:${PORT}`);
})