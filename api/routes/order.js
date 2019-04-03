const express = require('express');
const router =express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
message : 'Handling GET request to /order'
    });
})

router.get('/:orderId', (req,res,next)=>{
    const id = req.params.orderId;
    if(id === '1'){
    res.status(200).json({
        message : '1st order generated',
        id:id
    });
}
else{
    res.status(200).json({
        message : 'Not the first order'
            });
}
})
router.get('/', (req,res,next)=>{
    res.status(200).json({
message : 'Handling order request'
    });
})

module.exports = router;