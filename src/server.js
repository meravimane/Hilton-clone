const connect = require('./configs/db');

const app = require("./index");

app.listen(8050, async function () {
    await connect();
    console.log('listining on port 8050');
})