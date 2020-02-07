const dummyAll = [
    {
        name: 'Clean house',
        isDone: false
    },
    {
        name: 'Walk dog',
        isDone: true
    }
];



exports.getAll = (req, res) => {
    res.json(dummyAll);
};

exports.create = (req, res) => {
    // todo: You should validate!
    let todo = req.body;
    dummyAll.push(todo);
    res.sendStatus(200);
};