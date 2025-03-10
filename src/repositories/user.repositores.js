import db from "../config/database";

db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        avatar TEXT
    )
`)

function createUserRepository(newUser) {
    return new Promise((resolve, reject) => {
        const {username, email, password, avatar } = newUser;
        db.run(
            `
            INSET INTO users (USERNAME, email, password, avatar)
            VALUES (?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({message: "User created successfully" });
                }
            }
        );
    });
}

export default {
    createUserRepository
};