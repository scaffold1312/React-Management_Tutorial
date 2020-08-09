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
//로딩바
import CircularProgress from "@material-ui/core/CircularProgress";
//css 불러오기
import { withStyles } from '@material-ui/core/styles';

//표형태를 유지하며 스크롤바 생기게 하기
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overFlowX: "auto"
  },
  table: {
    minWidth: 1000
  },
  progress: {
    margin: theme.spacing.unit * 2
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
 * 1) constructor()
 * 
 * 2) componentWillMount()
 * 
 * 3) render()
 * 
 * 4) componentDidMount()
 * 
 * props or state => shouldComponentUpdate()
 * 
 * 리엑트 component 는 화면의 변경을 감지해서 알아서 반영해주기때문에 상태만 잘 관리해주면됨
 * 
 */
class App extends Component {

  //변경
  state = {
    customer: "",
    //이 변수를 통해 로딩바의 완성도를 줌
    completed: 0
  }
  
  //실제로 api 서버에 접근을 하여 데이터를 받아오는 등의 작업을 하는곳
  //마운트가 완료되었을 때 해주는 작업 (아래에 정의해둔 기능을 가져와서 사용함)
  componentDidMount() {

    //0.02초마다 progress함수가 실행되도록 실행
    this.timer = setInterval(this.progress, 20);

    //callApi 를 불러와서 customers라는 변수에 res를 담는다?
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  //API를 CALL하여 JSON데이터를 담아줌
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  //로딩바 PROGRESS 설정
  progress = () => {
    const { completed } = this.state;
    //completed가 100이 되는순간 0으로 줄어들고 그렇지 않으면 1씩 증가
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
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
          ) :
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
            </TableRow>
          }     
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
