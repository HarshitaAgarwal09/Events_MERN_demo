const express = require('express');
const router = express.Router();

const { model } = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../../middleware/auth');

// import { auth } from '../../middleware/auth.js';
const User = require('../../models/user');

//@route post api/user
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
                console.log(user);
                jwt.sign({ _id: user._id }, config.get('JWTsecret'), { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    return res.json({
                        msg: "User Saved",
                        user: {
                            _id: user._id,
                            name: user.name,
                            email: user.email
                        },
                        token: token
                    })
                });
            })
                .catch(err => { console.log(err) })
        })
    })
})

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) throw Error('User Does not exist');
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

module.exports = router;
