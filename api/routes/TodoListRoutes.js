module.exports = app => {
    const todoList = require('../controllers/TodoListController');

    // Routes for Todo

    app.route('/todo')
        .get(todoList.getAll)
        .post(todoList.create);
};