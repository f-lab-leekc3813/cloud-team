const database= require('../config/database.config');
const trans_region = require('./trans_region');


async function regionCheck (data){
    let co;

    try {
        const region = trans_region(data)
        co = await database.getConnection();
        const query = `SELECT * FROM crolling.cr_${region}`;

        const [result] = await co.execute(query);
        co.release();
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = regionCheck;
