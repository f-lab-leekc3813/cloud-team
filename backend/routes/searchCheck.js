const database = require('../config/database.config');


async function searchCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM crolling.product WHERE title like '%${data}%'`;

        const [result] = await co.execute(query);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = searchCheck;