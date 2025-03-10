import userRepository from '../repositories/user.repositores.js';

async function createUserService(newUser) {
    const user = await userRepository.createUserRepository(newUser)
    return user;
}

export default {
    createUserService
}