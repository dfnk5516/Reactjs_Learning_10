import React, { Component } from 'react';
import './Reset.scss';
import './Test4.scss';

export default class Test4 extends Component {
  state = {
    data: [
      {
        no: 1,
        text: '이벤트 뉴스 설명입니다.',
        link: 'http://www.naver.com',
        date: '2020.06.30',
      },
      {
        no: 2,
        text: '네이트 뉴스 설명입니다.',
        link: 'http://www.nate.com',
        date: '2020.06.30',
      },
      {
        no: 3,
        text: '아마존 뉴스 설명입니다.',
        link: 'http://www.amazon.com',
        date: '2020.06.30',
      },
      {
        no: 4,
        text: 'aws 뉴스 설명입니다.',
        link: 'http://www.aws.com',
        date: '2020.06.30',
      },
      {
        no: 5,
        text: 'npm 뉴스 설명입니다.',
        link: 'http://www.npmjs.com',
        date: '2020.06.30',
      },
      {
        no: 6,
        text: '이벤트 뉴스 설명입니다.',
        link: 'http://www.naver.com',
        date: '2020.06.30',
      },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <div className="Test4">
        <article className="news">
          <h3>뉴스 타이틀</h3>
          <ul>
            {data.map(item => (
              <li>
                <a href={item.link}>{item.text}</a>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
          <p className="more">
            <a href="#"> + </a>
          </p>
        </article>
      </div>
    );
  }
}
