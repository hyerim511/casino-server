const fs = require('fs');
const userData = './data/users.json';

async function authenticateUser(req) {
    const { username, password } = req.query;
    return new Promise((resolve, reject)=>{
        fs.readFile(userData, 'utf-8', (err, fileData)=>{
            if(err) {
                reject(err);
                return;
            }
            const users = JSON.parse(fileData);
            if(users[username] && users[username].password === password) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

async function addUser(filePath, username, password) {
    return new Promise((resolve, reject) => {
        const fileData = fs.readFileSync(filePath);
        let users;

        try {
            users = JSON.parse(fileData);
        } catch(error) {
            reject(error);
            users = {};
        }

        if(!users[username]) {
            users[username] = {
                password: password,
                balance: 10,
                tickets: 3
            };
            fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
            console.log(`USER ${username} was added`);
        } else {
            console.log("username already existes");
        }

        resolve();
    });
}

module.exports = {
    authenticateUser,
    addUser
};