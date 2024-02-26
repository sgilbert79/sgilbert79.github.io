const pool = require('./main.db.sqbpro');

const createOrder = async (userId, productId, quantity, status) => {
    const client = await pool.connect();
    try {
        const result = await client.query(
            'INSERT INTO orders (user_id, product_id, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *',
            [userId, productId, quantity, status]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
};

module.exports = {
    createOrder
};
