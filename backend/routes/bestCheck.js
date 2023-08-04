const database = require('../config/database.config');


async function bestCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM machine.${data} limit 30`;

        const [result] = await co.execute(query);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = bestCheck;