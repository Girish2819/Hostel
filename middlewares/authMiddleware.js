import JWT from "jsonwebtoken";

//protecting routes token base 
export const requireSignIn=async (req, res, next) => {
   try{
     const decode =JWT.verify(
        req.headers.authorization,
         process.env.JWT_SECRET);
    //  console.log("Decoded user:", decode);
     req.user = decode; 
    next();
   }catch (error) {
       console.log(error);
       res.status(401).send({
           success: false,
           message: 'Unauthorized Access',
           error
       });
   }

};

// admin access
export const isAdmin = async (req, res, next) => {
    try{
        const user =await userModel.findById(req.user.id)
        if (user.role !== '1') {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Access'
            });
        } else{
            next();
        }
    }catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
             error,
            message: 'Error in Admin Middleware',
           
        });
    }
};