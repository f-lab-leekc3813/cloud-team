const database = require('../config/database.config');


async function likeCheck(userId,bookId) {
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM project.like WHERE userId = '${userId}' and bookId = '${bookId}'`;

        const [result] = await co.execute(query);
        co.release();
        return result
    } catch (error) {
        return error;
    }
}

module.exports = likeCheck;