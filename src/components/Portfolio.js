import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Panda Pay (Web version)",
    description: `Panda Pay is a multi-currency money transfer web application that not only allows it's users to save money in different currencies but to also transfer different currencies to other users. This project was built with React typescript`,
    image: project1,
    sourceCode: 'https://github.com/Ahumareze/PandaPay',
    link: 'https:pandapay.netlify.app'
  },
  {
    name: "Safe Ng",
    description: `Safe is a social network that allows users to visit and share information about crimes happening in their area to keep other citizens informed and safe. This project was built with React typescript`,
    image: project2,
    sourceCode: 'https://github.com/Ahumareze/Safe.NG',
    link: 'https:safeng.netlify.app'
  },
  {
    name: "Elite Corp Investment",
    description: `Elite corp is an investment web application for a firm in Worcester, USA. This site helps investors as it provides them with 24/7 live updates on their investments, crypto charts and other anlysis tools. This project was built with React Js`,
    image: project3,
    sourceCode: 'https://github.com/Ahumareze/elitecorpinvestment',
    link: 'https:elitecorpinvestment.org'
  },
  {
    name: "Panda Pay-v2 (Mobile version)",
    description: `The panda pay-v2 is quite different from the first version. The panda pay-v2 is a mobile app that helps users transfer money, and also uses NFTs to represent the number of transfers a user has made. Extra features includes (QrCode scanner, crypto currency purchase store, e.t.c). This project was built with React native typescript`,
    image: project4,
    sourceCode: 'https://github.com/Ahumareze/PandaPay-mobile',
    link: 'https://github.com/Ahumareze/PandaPay-mobile'
  },
  {
    name: "NBA G.O.A.T ",
    description: `Nba goat is a chrome extension that allows you to check up on your favourite players, teams and games in real time. (nb: this project is still in development and is expected to be finished by April 14th)`,
    image: project5,
    sourceCode: '',
    link: ''
  }
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.location.assign(project.sourceCode)}>
                  Source code
                </Button>
                <Button size="small" color="primary" onClick={() => window.location.assign(project.link)} >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
