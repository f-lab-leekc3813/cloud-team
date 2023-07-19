const database = require('../config/database.config');


async function crollCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM project.${data}`;

        const [result] = await co.execute(query);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = crollCheck;