import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltrounds = (10);
        const hashPassword= await bcrypt.hash(password, saltrounds);
       return hashPassword
    } catch (error) {
        console.log(error);
       
    }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
       
};
