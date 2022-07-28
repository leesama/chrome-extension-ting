import React from 'react';
import { useLayoutEffect } from 'react';
import './Newtab.css';
import render from './render';

const Newtab = () => {
  useLayoutEffect(() => {
    render();
  }, []);
  return (
    <>
      <canvas
        id="c"
        style={{ position: 'absolute', zIndex: -1, textAlign: 'center' }}
      ></canvas>
      <div className="middle">
        <h1 className="label">Every Day About You</h1>
        <div className="search">
          <input id="input" type="text" />
          <button className="baidu" id="baidu">
            百度一下
          </button>
        </div>
        <h1 className="label" id="time"></h1>
      </div>
    </>
  );
};

export default Newtab;
