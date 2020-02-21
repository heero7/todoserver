const { dbPool } = require('./queries');
const uidGen = require('uuid');

const getAll = (_, res) => {
    dbPool.query('SELECT * FROM todos', (error, results) => {
        if (error) {
            console.error(error);
            res.sendStatus(500);
        }

        res.json(results.rows);
    });
};

// test uid: bf2db690-9ae5-46d5-960f-1a0011fbf055
const create = (req, res) => {
    const { name, userid } = req.body;
    const todoId = uidGen.v4();

    dbPool.query('INSERT INTO todos (todoid, userid, name, status) VALUES ($1, $2, $3, $4)',
                    [todoId, userid, name, 'false'],
                    (error, _) => {
                        if (error) {
                            console.error(error);
                            return;
                        }

                        res.status(201).send({ id: todoId });
                    })
};

module.exports = {
    getAllTodos: getAll,
    createTodo: create,
};