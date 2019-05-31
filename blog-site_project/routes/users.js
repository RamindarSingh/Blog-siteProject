var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {

  console.log('Got call in backend server for GET all users')
  try {
    const user = await User.find({});
    if(user.length == 0){
      res.json({err: 'No user exist'});
    } else{
      res.json(user);
    }

  }catch(e) {
    res.json({Error: 'Error is ${e}'});

  }

});

router.post('/',async (req, res)=> {

  const {title, image, description} = req.body;

  const newUser = new User({
        title,
        image,
        description
  })
  try {
    const user = await newUser.save();
    res.json({success: 'User added'});
  }catch(e) {
    res.json({Error: 'Error is ${e}'});

}
})

router.get('/:id', async (req,res) =>{
  try{
    const user = await User.findById(req.params.id);
    if(user.length == 0){
      res.json({err: 'No user exist'});
    }else{
      res.json(user);
    }
  }catch(e){
    res.json('Error : ' + e.message)
    }
})


router.delete('/:id', async (req,res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.json('Successfully deleted');
    }catch(e){
      res.json('Error : ' + e.message)
    }
})

router.put('/:id', async (req,res) =>{
  try{
    const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.json({success: 'User is updated'})
  }catch(e){
    res.json({Error: 'User is updated'})
  }
})

module.exports = router;
