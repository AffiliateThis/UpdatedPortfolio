import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
// import * as ReactMDL from 'react-mdl';
import "./App.css";
import Main from "./Components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout
        // style={{
        //   background: "url(https://res.cloudinary.com/dtd8cnede/image/upload/v1563557007/IMG_20190527_134509_v8flg8.jpg) center / cover"
        // }}
        >
          <Header className="header-color" title="Title" scroll>
            {/* // transparent title="Title" style={{ color: "white" }}> */}
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
