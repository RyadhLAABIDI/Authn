const {body, validationResult} = require('express-validator');


exports.RegisterValidator=[
body('email','please put the validator email').isEmail(),
body('password','please put the password min 6 caracter').isLength({min:6})
]
exports.loginValidator=[
    body('email','please put the validator email').isEmail(),
    
    ]
exports.validation=async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
       return res.status(400).json({errors:errors.array() })
    }
    next()
}