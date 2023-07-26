const database = require('../config/database.config');

async function regionCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        let query;
        if (data === 'best') {
            query = `SELECT * FROM crolling.product ORDER BY view DESC LIMIT 100`;
        } else {
            query = `SELECT * FROM crolling.product WHERE region like '%${data}%'`;
        }

        const [result] = await co.execute(query);
        co.release();
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = regionCheck;
