require('dotenv').config();
const app = require('./src/app');

const PORT=3000;
app.listen(PORT, () => {
    console.log(`server is runnning on ${PORT}`);
})