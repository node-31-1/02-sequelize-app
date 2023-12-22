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

// /users/3
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    // const user = await User.findOne({ where: { id: 2 } })
    const user = await User.findByPk(id);
    return res.json(user);
});

// /users/1
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id: id } });
    return res.sendStatus(204);
})

// /users/1
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { name, email, phone, birthday } = req.body;
    const user = await User.update({
        name: name,
        email: email,
        phone: phone,
        birthday: birthday,
    }, { where: { id: id }, returning: true });
    return res.json(user);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}