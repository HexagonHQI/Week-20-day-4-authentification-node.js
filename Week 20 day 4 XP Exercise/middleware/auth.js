const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.user = decoded;
        next();
    });
};
