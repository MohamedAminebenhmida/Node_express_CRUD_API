 const  uuid =require('uuid');
const uuid4=uuid.v4();
 let users=[

];

  exports.getUsers=(req,res)=>{
    res.send(users)
}
 exports.createUser=(req,res)=>{
    const user=req.body;

    users.push({...user,id:uuid4})
   res.send('user created with success!') 
}

exports.getUser=(req,res)=>{

    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id)
    res.send(foundUser)
}
exports.deleteUser=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`user with id ${id} was deleted with sucess`)
}
exports.updateUser=(req,res)=>{
    const user = users.find((user) => user.id === req.params.id);
    
    req.body.firstName&&(user.firstName = req.body.firstName);
    req.body.LastName&&(user.LastName = req.body.LastName);
    req.body.age&&(user.age = req.body.age);

console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
}