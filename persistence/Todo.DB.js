const { dbPool } = require('./queries');

const getAllTodos = (_, res) => {
    dbPool.query('SELECT * FROM todos', (error, results) => {
        if (error) {
            console.error(error);
            res.sendStatus(500);
        }

        res.json(results.rows);
    });
};

module.exports = {
    getAllTodos,
};