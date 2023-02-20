const express=require('express');

const router=express.Router();
const users=[
{ firstName :"John",
 LastName :"Doe",
age : 25},
{firstName :"Jane",
 LastName :"Doe",
age : 23
}
]

router.get('/',(req,res)=>{
    res.send(users)
});
router.post('/',(req,res)=>{
    const user=req.body;
    users.push(user)
   res.send('user created with success!') 
})

module.exports = router;