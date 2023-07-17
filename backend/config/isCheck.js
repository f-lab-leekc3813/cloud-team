const database= require('./database.config');


async function emailCheck (email){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT email FROM project.user WHERE email=?`;
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

async function nicknameCheck (nickname){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT nickname FROM project.user WHERE nickname=?`;
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

async function isCheck(email, password, nickname) {
    const emcheck = await emailCheck(email);
    const nicheck = await nicknameCheck(nickname);
    return {emcheck, nicheck};
  }
  
  module.exports = isCheck;
