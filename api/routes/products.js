const express = require('express');
const router =express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
message : 'Handling GET request to /product'
    });
})

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === '1'){
    res.status(200).json({
        message : '1st id generated',
        id:id
    });
}
else{
    res.status(200).json({
        message : 'Not the first id'
            });
}
})
router.post('/', (req,res,next)=>{
    res.status(200).json({
message : 'Handling POST request to /product'
    });
})

module.exports = router;