import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Test1 extends Component {
  state = {
    data: [
      { no: 1, name: '홍길동', tel: '010-5701-5516', addr: '서울' },
      { no: 2, name: '강호동', tel: '000-1111-0000', addr: '부산' },
      { no: 3, name: '김철수', tel: '000-2222-0000', addr: '대전' },
      { no: 4, name: '유재석', tel: '000-3333-0000', addr: '대구' },
      { no: 5, name: '신동엽', tel: '000-4444-0000', addr: '광주' },
      { no: 6, name: '하하하', tel: '000-5555-0000', addr: '태릉' },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.name}</td>
                <td>{item.tel}</td>
                <td>{item.addr}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
