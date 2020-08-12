const express = require('express');
const router = express.Router();

const { model } = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

//@route post api/auth
router.post('/', (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(400).json({ msg: "User already Exists" })
            }
        })

    const newUser = new User({ name, email, password });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                jwt.sign({ id: user._id }, config.get('JWTsecret'), { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    return res.json({
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        },
                        token: token
                    })
                });
            })
        })
    })
})


router.get('/user', (req, res) => {
    User
        .findById(req.user._id)
        .select('password')
        .then(user => res.status(200).json(user))
        .catch(err => res.status(404).json({ msg: err, success: false }));

})

module.exports = router;