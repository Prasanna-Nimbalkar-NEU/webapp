const { check } = require('express-validator');

exports.signupValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('username', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    // check('username', 'Please include a valid email').trim().normalizeEmail().isEmail().withMessage('Invalid email'),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

exports.loginValidation = [
     check('username', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })

]