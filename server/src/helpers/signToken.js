const jwt = require('jsonwebtoken');

module.exports = (user, secret, expirationTime) => {
    const { id, email, name, last_name, created_at } = user;
    return jwt.sign( { id: id, email, name, last_name, created_at }, secret, { 
        expiresIn: expirationTime
    });
}