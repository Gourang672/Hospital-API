import jwt from "jsonwebtoken";
// verifying the jwt token
export default class Auth{
    verify=(req,res,next)=>{
        const token = req.headers['authorization'];
        if (!token) {
          return res.status(403).json({
            success: false,
            message: "No token provided"
          });
        }
        jwt.verify(token, "%-EdqpI<nq^.1:N", (err, decoded) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: "Failed to authenticate token"
            });
          }
          req.userId = decoded.id;
          next();
        });
        //calling next middleware
        next();
    };
}
