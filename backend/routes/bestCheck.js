const database = require('../config/database.config');


async function bestCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        let query;
        if (data==='score_books'){
            query = `SELECT * FROM project.books order by score desc limit 30`;
        } else {
            query = `SELECT * FROM project.books order by count desc limit 30`;
        }
        
        const [result] = await co.execute(query);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = bestCheck;