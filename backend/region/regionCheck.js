const database = require('../config/database.config');
const trans_region = require('./trans_region');


async function regionCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        let query;
        if (data === 'best') {
            query = `SELECT * FROM crolling.best`;
        } else {
            query = `SELECT * FROM crolling.croll WHERE region like '${data}%'`;
        }

        const [result] = await co.execute(query);
        co.release();
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = regionCheck;
