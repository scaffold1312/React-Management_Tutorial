const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//express 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//get방식으로 부르기
// app.get('/api/hello', (req,res) => {
//     res.send({message: 'Hello Express!'});
// });

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id':1,
            'image': 'http://placeimg.com/100/100/any',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id':2,
            'image': 'http://placeimg.com/100/100/any',
            'name': '이성준',
            'birthday': '910317',
            'gender': '남자',
            'job': '웹개발자'
        },
        {
            'id':3,
            'image': 'http://placeimg.com/100/100/any',
            'name': '김사라',
            'birthday': '911125',
            'gender': '여자',
            'job': '천상여자'
        }
    ]);
});

//서버를 실질적으로 부르는부분. 문자안에 변수를 넣으려면 1옆의 `를 사용하여야한다.
app.listen(port, () => console.log(`Listening on port ${port}`));