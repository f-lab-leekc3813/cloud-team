const database= require('./database.config');

async function login (email,password){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT email,password FROM project.user WHERE email=? and password=?`;
        const values = [email,password];

        const [result] = await co.execute(query,values);
        co.release();
        if (result.length>0) {
            return result;
        }else {
            return false;
        }
    } catch (error) {
        return error;
    }
}

module.exports = login;
