const express = require("express")
const User = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (existingUser !== null) {
            res.status(400);
            return next(new Error("That username already exists!"));
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(201).send({user: user.toObject(), token});
        });
    });
});

authRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!user || user.password !== req.body.password) {
            res.status(403);
            return next(new Error("Username or password are incorrect"));
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.send({user: user.toObject(), token})
    });
});

module.exports = authRouter;