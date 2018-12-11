import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import styled from 'styled-components';



class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;