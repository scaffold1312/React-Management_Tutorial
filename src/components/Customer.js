//특정한 라이브러리를 불러옴
import React from 'react';

//Customer 클래스는 리엑트의 컴포넌트란 의미
class Customer extends React.Component {
    //화면에 그리고자 할때 실제로 그려주는 역할(React는 렌더를 항상 그림)
    render() {
        //렌더안의 리턴 필수
        return (
            //구조화한 내용 계층적으로 구성하기
            <div>
                <CustomerProfile 
                    id={this.props.id} 
                    image={this.props.image}
                    name={this.props.name}
                />
                <CustomerInfo
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    job={this.props.job}
                />
            </div>
        );
    }
}

//고객 컴포넌트 구조화하기
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

//Customer클래스를 내보낼수있게 정의
export default Customer;