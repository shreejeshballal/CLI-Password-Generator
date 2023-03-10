const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e,id) => {
        fs.writeFile(id, password + os.EOL, "utf-8", () => {
            fs.close(id, () => {
            console.log("Password saved to passwords.txt")
        })
        });
    });    
}
module.exports = savePassword;