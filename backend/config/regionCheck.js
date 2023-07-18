const database= require('./database.config');

async function regionCheck (region){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT * FROM project.region WHERE region like ?`;
        const values = [`%${region}%`];

        const [result] = await co.execute(query,values);
        co.release();
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = regionCheck;
