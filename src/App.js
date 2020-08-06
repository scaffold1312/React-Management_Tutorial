import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

//customer라는 const에 데이터담기
const customers = [
{
  'id':1,
  'image': 'https://paceimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id':2,
  'image': 'https://paceimg.com/64/64/any',
  'name': '이성준',
  'birthday': '910317',
  'gender': '남자',
  'job': '웹개발자'
},
{
  'id':3,
  'image': 'https://paceimg.com/64/64/any',
  'name': '김사라',
  'birthday': '911125',
  'gender': '여자',
  'job': '천상여자'
}
]
class App extends Component {
  render() {
    return (
      //들어가는 요소가많기때문에 div로 감쌈
      <div>
        {
          //배열을 map으로 받을 수 있음
          //각 원소를 c로 순회하겠다는 arrow function
          customers.map(c => {
            return (
              <Customer
                //map은 key라는 이름의 props를 사용하여 설정해줘야함 (pk같은 값을 잡아주면 좋음)
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
        
      {/* 아래 배열형식 대신 맵을 사용할수도있음 (위쪽)
      ==========================
      //Customer에 props를 통해 전달
      <Customer
        id={customers[0].id}
        img={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        img={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        img={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      /> 
      */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="gray-background">
//       <img src={logo} lat="logo" />
//       <h2>Let's develop management system!</h2>
//     </div>
//   );
// }

export default App;
