const database = require('../config/database.config');


async function categoryCheck(data) {
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM project.books WHERE categories like '%${data}%' limit 40`;

        const [result] = await co.execute(query);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = categoryCheck;