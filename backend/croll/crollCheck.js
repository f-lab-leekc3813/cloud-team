const database = require('../config/database.config');

const croll = {};

async function crollCheck(data) {
    let co;

    try {
        if (data in croll) {
            return croll[data];
        } else {
            co = await database.getConnection();
            const query = `SELECT * FROM project.${data}`;

            const [result] = await co.execute(query);
            co.release();
            croll[data] = result;
            return result;
        }

    } catch (error) {
        return error;
    }
}

module.exports = crollCheck;