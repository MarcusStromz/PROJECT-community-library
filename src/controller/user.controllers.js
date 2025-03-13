import userService from '../service/userServices.js';

async function createUserController (req, res) {
    const newUser = req.body;

    try {
        const user = userService.createUserService(newUser);
        return res.status(201).send({user});
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

export default {
    createUserController
}