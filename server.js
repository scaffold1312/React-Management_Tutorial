const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//express 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//get방식으로 부르기
app.get('/api/hello', (req,res) => {
    res.send({message: 'Hello Express!'});
});

//서버를 실질적으로 부르는부분. 문자안에 변수를 넣으려면 1옆의 `를 사용하여야한다.
app.listen(port, () => console.log(`Listening on port ${port}`));