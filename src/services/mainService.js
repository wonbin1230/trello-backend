const jwt = require("jsonwebtoken");
const mainDao = require("../daos/mainDao");
const env = require("../../env");
const resModel = require("../models/resModel");

module.exports.genLoginInfo = async function () {
    const _id = await mainDao.saveNewUser();
    const jwtToken = jwt.sign({ "_id": _id }, env.jwtSecret);
    return new resModel(jwtToken);
};

module.exports.insertList = async function (data) {
    const ListMsg = await mainDao.insertNewList(data);
    console.log(ListMsg);
    return new resModel(ListMsg);
};

module.exports.queryList = async function (data) {
    const ListData = await mainDao.queryList(data);
    console.log(ListData);
    return new resModel(ListData);
};

module.exports.testAsync = async function () {
    const daoRes = await mainDao.testAsync(2);
    return new resModel(daoRes);
};