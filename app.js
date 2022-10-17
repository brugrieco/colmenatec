const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {console.log('listening on port 3000');});

app.get('/', (req, res) => {
    res.send('mi server funcionando');
})