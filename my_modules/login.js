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

module.exports = {
    authenticateUser
};