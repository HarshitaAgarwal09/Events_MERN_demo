const express = require('express');
const router = express.Router();

const { model } = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/user');

//@route post api/auth
router.post('/', (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields!" })
    }

    User.findOne({ email: email })
        .then(user => {
            if (!user)
                return res.status(400).json({ msg: "User doesnot exists!" });

            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch)
                    return res.status(400).json({ msg: "Not Authenticated" });

                jwt.sign({ _id: user._id }, config.get('JWTsecret'), { expiresIn: 3600 }, (err, token) => {
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

module.exports = router;