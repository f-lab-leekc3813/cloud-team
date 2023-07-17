const database= require('./database.config');

async function emailCheck (email){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT email FROM project.project WHERE email=?`;
        const values = [email];

        const [result] = await co.execute(query,values);
        co.release();
        if (result.length>0) {
            return true
        }else {
            return false
        }
    } catch (error) {
        return error;
    }
}


module.exports = emailCheck;