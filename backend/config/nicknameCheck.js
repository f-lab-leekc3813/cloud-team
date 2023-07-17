const database= require('./database.config');

async function nicknameCheck (nickname){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT nickname FROM project.project WHERE nickname=?`;
        const values = [nickname];

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


module.exports = nicknameCheck;