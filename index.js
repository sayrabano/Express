const express= require('express');
const app = express();
const port  = 8000;



app.get(port,function(req,res){
    
})
app.listen(port ,function(err){
    if(err){
        console.log('error',err);
        console.log(`Error:  ${err,port}`);
    }
    console.log(`Server is running on:  ${port}`);
});
