import React, { Component } from "react";
import styled from "styled-components";

const NavigationBar = styled.div`
  height: 56px;
  background-color: grey;
  width: 100%;
`;

class AppBar extends Component {
  render() {
    return <NavigationBar>Welcome to Freelo</NavigationBar>;
  }
}

export default AppBar;
