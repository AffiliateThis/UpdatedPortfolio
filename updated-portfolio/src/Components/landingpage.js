import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12} >
          <img
            scr="https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fuser-pictures%2F100%2Fmalecostume-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F628289%2Favatar_business_costume_male_man_office_work_icon&docid=G_df5AlvKC1kUM&tbnid=MvKIRrrd9GD1CM%3A&vet=10ahUKEwj39PSv38HjAhXGJt8KHf47CRoQMwh-KAAwAA..i&w=512&h=512&bih=850&biw=1707&q=avatar%20male&ved=0ahUKEwj39PSv38HjAhXGJt8KHf47CRoQMwh-KAAwAA&iact=mrc&uact=8 "
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr/>
          </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
