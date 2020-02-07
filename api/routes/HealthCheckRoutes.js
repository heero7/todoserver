module.exports = app => {
    app.route('/health')
        .get((req, res) => {
            res.json({ status: 'Looking good server!' });
        });
};