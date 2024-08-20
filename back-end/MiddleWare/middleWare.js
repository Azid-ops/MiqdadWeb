const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    console.log("verify user is runnig");
    const authorize = req.headers.authorization || req.headers.Authorization;
    if (authorize && authorize.startsWith("Bearer ")) {
        const token = authorize.substring(7, authorize.length);
        if (!token)
            return res.status(401).send({ message: "Unauthorized" });

        jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
            if (error)
                return res.status(401).send({ message: "Unauthorized" });
            
            req.user = decoded;
            next();
        });
    }
    
    else    
        return res.status(401).send({ message: "Unauthorized" });

}

module.exports = { verifyUser };