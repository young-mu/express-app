const app = require('express')();

app.get('/', (req, res) => {
    res.send('ok, hello world');
});

app.get('/hello', (req, res) => {
    res.send('hello?');
});

app.listen(3000, () => {
    console.log('server is listening at port 3000');
});
