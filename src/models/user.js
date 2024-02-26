const pool = require('./main.db.sqbpro');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = async (username, email, password) => {
    const client = await pool.connect();
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const result = await client.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
};

module.exports = {
    createUser
};
