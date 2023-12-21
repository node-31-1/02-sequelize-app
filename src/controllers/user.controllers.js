const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const { name, email, phone, birthday } = req.body;
    const user = await User.create({
        name: name,
        email: email,
        phone: phone,
        birthday: birthday,
    });
    return res.status(201).json(user);
});

module.exports = {
    getAll,
    create
}