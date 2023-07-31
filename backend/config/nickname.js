const database = require('./database.config');

async function nickname(email, password) {
  let co;

  try {
    co = await database.getConnection();
    const query = `SELECT * FROM project.user WHERE email = ? AND password = ?`;
    const [rows] = await co.execute(query, [email, password]);
    co.release();

    if (rows.length === 1) {
      // If user found, return the user object including the nickname
      return {
        nickname: rows[0].nickname
      };
    } else {
      // If user not found, return null
      return null;
    }
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
}

module.exports = nickname;