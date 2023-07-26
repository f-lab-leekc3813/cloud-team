const database = require('../config/database.config');

async function regionPage(index) {
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM crolling.product WHERE \`index\` = ${index}`;

        const [result] = await co.execute(query);
        co.release();
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = regionPage;
