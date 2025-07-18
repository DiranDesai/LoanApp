import {verifyToken} from "../utils/jwt.js"
import User from "../models/User.js"

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];

        if (!token) {
            console.log(token);
            return res.status(401).json({
                msg: "No token available"
            });
        } else {
            const decoded = await verifyToken(token)
            console.log(decoded)
            if (!decoded) {
                return res.status(401).json({ message: "Invalid token" });
            }
            const user = await User.findOne({where: {id: decoded.userId}});
            const plainUser = user.toJSON();
            delete plainUser.password
            req.user = plainUser
            next(); 
        }
    } else {
        res.status(401).json({
            msg: "Not authorized"
        })
    }
}

export default protect