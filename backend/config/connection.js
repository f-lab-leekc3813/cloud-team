const database = require('./database.config');

async function connection(email, password, nickname) {
    let co;

    try {
        co = await database.getConnection();
        const query = `INSERT INTO project.user (email, password, nickname) VALUES (?, ?, ?)`;
        const values = [email, password, nickname];

        const [result] = await co.execute(query, values);
        co.release();
        return result;
    } catch (error) {
        return error;
    }
}


module.exports = connection;