import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/dtd8cnede/image/upload/v1564031881/relay%20estimator/chart_screenshot_ooamkj.png) center/cover"
              // "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAPF8vrQ6xvb0zExOUS00ZB_KFeIi2UiC5ZkWvWzveIO0wATsQ) center / cover"
            }}
          />
          <CardText>
            In this project, the team created an app that helps
            designers/developers provide cost estimates/forecasts based on each
            task per project. Once a project is added, the total cost of each
            task is calculated, based on the estimated hrs of completion and
            cost per hour. A Doughnut Chart beautifully displays tasks based on
            the value and sums up the project total..
          </CardText>
          <CardActions border>
            <Button
              colored
              href="https://github.com/jmschindele/group_project_3"
              target="_blank"
            >
              Github
            </Button>
            <Button
              colored
              href="https://salty-reef-43633.herokuapp.com"
              target="_blank"
            >
              URL
            </Button>
            <Button colored href="http://bit.ly/2Ydgk2n " target="_blank">
              LiveDemo
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/dtd8cnede/image/upload/v1564031881/relay%20estimator/chart_screenshot_ooamkj.png) center/cover"
              // "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAPF8vrQ6xvb0zExOUS00ZB_KFeIi2UiC5ZkWvWzveIO0wATsQ) center / cover"
            }}
          />
          <CardText>
            Trail Tracker is a web application designed for the hiking
            enthusiast who wants to commemorate their hiking experiences. The
            user only needs to sign up by creating a username and password to
            begin. Once the user has signed up, they are able to create as many
            blog posts as they want and are only limited by the number of hikes
            that they complete!
          </CardText>
          <CardActions border>
            <Button
              colored
              href="https://github.com/millhousenm/Project2"
              target="_blank"
            >
              Github
            </Button>
            <Button
              colored
              href="https://floating-refuge-62057.herokuapp.com"
              target="_blank"
            >
              URL
            </Button>
            <Button
              colored
              href="https://youtu.be/3E7jdG1uMA8 "
              target="_blank"
            >
              LiveDemo
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );

      // );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Express</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          {/* <Tab>Mongodb</Tab> */}
          <Tab>Express</Tab>
          <Tab>Javascript</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
