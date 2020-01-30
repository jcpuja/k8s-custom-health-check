const express = require('express');
const app = express();
const router = express.Router();

let numberOfCalls = 0;

router.get('/health', (req, res) => {
    numberOfCalls++;

    if (numberOfCalls < 10) {
        res.status(200).send();
    } else {
        res.status(503).send();
    }

});

app.use('/', router);

app.listen(8080, () => console.log('listening on port 8080'));