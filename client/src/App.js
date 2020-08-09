import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
// import imgA from './images/sara001.jpg';
// import imgB from './images/sara002.jpg';
//6강 Material Ui 적용
import Paper from '@material-ui/core/Paper'; //외부를 감싸기위해 사용하는 컴포넌트
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
//css 불러오기
import { withStyles } from '@material-ui/core/styles';

//표형태를 유지하며 스크롤바 생기게 하기
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit *3,
    overFlowX: "auto"
  },
  table: {
    minWidth: 1000
  }
})

//customer라는 const에 데이터담기
// const customers = [
// {
//   'id':1,
//   'image': imgA,
//   'name': '홍길동',
//   'birthday': '961222',
//   'gender': '남자',
//   'job': '대학생'
// },
// //TODO 깃에 올리기전에 사진은 지우기
// {
//   'id':2,
//   'image': imgA,
//   'name': '이성준',
//   'birthday': '910317',
//   'gender': '남자',
//   'job': '웹개발자'
// },
// {
//   'id':3,
//   'image': imgB,
//   'name': '김사라',
//   'birthday': '911125',
//   'gender': '여자',
//   'job': '천상여자'
// }
// ]

/**
 * 1~5강 Component
 */
class App extends Component {

  //변경
  state = {
    customer: ""
  }
  
  //실제로 api 서버에 접근을 하여 데이터를 받아오는 등의 작업을 하는곳
  //마운트가 완료되었을 때 해주는 작업
  componentDidMount() {
    //callApi 를 불러와서 customers라는 변수에 res를 담는다?
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  //props는 변경될 수 없는 데이터
  //state 변경될 수 있는 데이터
  render() {
    //classes 라는 변수 선언하여 위에서 정의한거 가져옴
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c => { return ( <Customer
                //map은 key라는 이름의 props를 사용하여 설정해줘야함 (pk같은 값을 잡아주면 좋음)
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
              )
            }
          ) : "" }     
          </TableBody>
        </Table>
      </Paper>
    )
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

export default withStyles(styles)(App);
