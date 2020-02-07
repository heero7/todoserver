const todo = require('../../persistence/Todo.DB');

exports.getAll = (_, res) => {
    todo.getAllTodos(_, res);
};

exports.create = (req, res) => {
    // todo: You should validate!
    todo.createTodo(req,res);
};