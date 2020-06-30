import React, { Component } from 'react';
import './Reset.scss';
import cat0 from './images/cat0.jpg';

export default class Test2 extends Component {
  render() {
    const mystyle = {
      width: 300,
      height: 200,
      backgroundColor: 'green',
    };
    return (
      <div>
        <div
          style={{
            width: '100%',
            height: 600,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundImage: 'URL(' + cat0 + ')',
            // backgroundImage: `URL(${cat0})`
          }}></div>
        <div style={mystyle}></div>

        {/* public 안에 이미지 */}
        <img src="/img/cat0.jpg" alt="" />
        <img src="img/cat1.jpg" alt="" />
        {/* components안에 images */}
        <img src={cat0} alt="" />
      </div>
    );
  }
}
