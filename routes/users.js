const express=require('express');
const  uuid =require('uuid');
const uuid4=uuid.v4();
const router=express.Router();
const users=[

]

router.get('/',(req,res)=>{
    res.send(users)
});
router.post('/',(req,res)=>{
    const user=req.body;

    users.push({...user,id:uuid4})
   res.send('user created with success!') 
})

module.exports = router;