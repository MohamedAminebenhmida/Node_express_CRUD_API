const express=require('express');
const  uuid =require('uuid');
const uuid4=uuid.v4();
const router=express.Router();
let users=[

]

router.get('/',(req,res)=>{
    res.send(users)
});
router.post('/',(req,res)=>{
    const user=req.body;

    users.push({...user,id:uuid4})
   res.send('user created with success!') 
})
router.get('/:id',(req,res)=>{

    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id)
    res.send(foundUser)
})
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`user with id ${id} was deleted with sucess`)
})
module.exports = router;