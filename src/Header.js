import React, { Component } from 'react';
import css from 'next/css';

const style = {
  header: css({
    padding: '1.5rem',
  }),

  title: css({
    fontSize: '1rem',
    fontWeight: '400',
  }),
}

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <h1 className={style.title}>
          <a href="https://daneden.me">Daniel Eden</a> &mdash; Photos
        </h1>
      </header>
    )
  }
}

export default Header;
