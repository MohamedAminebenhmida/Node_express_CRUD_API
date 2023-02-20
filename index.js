const express=require('express')
const app=express();
const {products}=require('./data')



app.get('/',(req,res)=>{
res.send('<h1>Home page</h1><a href="/api/products"></a>')
})
app.get('/api/products/:productID',(req,res)=>{
  //console.log(req);
  //console.log(req.params);
  const {productID}=req.params;
const singleProduct=products.find((product)=>{
  product.id===Number(productID) 
})
if(!singleProduct){
  return res.status(404).send('product does not exist')
}
  res.json(singleProduct)
})





app.listen(5000,()=>{
console.log(`server is listening on port 5000`);
})