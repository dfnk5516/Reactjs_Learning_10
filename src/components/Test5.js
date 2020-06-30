import React, { Component } from 'react';
import './Reset.scss';
import './Test5.scss';
import Data from './Data.json';

export default class Test5 extends Component {
  state = {
    Movies: Data,
    movieItem: {},
  };
  componentDidMount() {
    const { Movies } = this.state;
    this.setState({
      movieItem: Movies[0],
    });
  }

  handleOver = id => {
    const { Movies } = this.state;
    this.setState({
      movieItem: Movies.find(item => item.rank === id),
    });
  };
  handleOut = () => {
    const { Movies } = this.state;
    this.setState({
      movieItem: Movies[0],
    });
  };
  render() {
    const { Movies, movieItem } = this.state;
    return (
      <div className="Test5">
        <div className="con-left">
          <p>
            <img src={movieItem.thumbUrl} alt="" />
          </p>
          <div>
            <h3>저 산 너머</h3>
            <ul>
              <li>
                <strong>개봉일</strong>
                <span>{movieItem.openDt}</span>
              </li>
              <li>
                <strong>제작상태</strong>
                <span>{movieItem.moviePrdtStat}</span>
              </li>
              <li>
                <strong>영화구분</strong>
                <span>{movieItem.movieType}</span>
              </li>
              <li>
                <strong>관람등급</strong>
                <span>{movieItem.watchGradeNm}</span>
              </li>
              <li>
                <strong>상여시간</strong>
                <span>{movieItem.showTm}</span>
              </li>
              <li>
                <strong>제작국가</strong>
                <span>{movieItem.repNationCd}</span>
              </li>
              <li>
                <strong>감독</strong>
                <span>{movieItem.director}</span>
              </li>
              <li>
                <strong>장르</strong>
                <span>{movieItem.genre}</span>
              </li>
              <li>
                <strong>배급사</strong>
                <span>{movieItem.dtNm}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="con-right">
          <table>
            <colgroup>
              <col className="w1" />
              <col className="w2" />
              <col className="w3" />
              <col className="w4" />
              <col className="w5" />
            </colgroup>
            <thead>
              <tr>
                <th>순위</th>
                <th>영화명</th>
                <th>매출액</th>
                <th>관객수</th>
                <th>증감율</th>
              </tr>
            </thead>
            <tbody>
              {Movies.map(item => (
                <tr
                  onMouseOver={() => {
                    this.handleOver(item.rank);
                  }}
                  onMouseOut={this.handleOut}
                  key={item.rank}>
                  <td>{item.rank}</td>
                  <td>{item.movieNm}</td>
                  <td>{item.salesAmt}원</td>
                  <td>{item.audiCnt}명</td>
                  <td>{item.salesShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{movieItem.synop}</p>
      </div>
    );
  }
}
