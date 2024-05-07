import React from "react";
import { Flex } from "antd";
import { motion } from "framer-motion";
import { GithubFilled } from "@ant-design/icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

var width = 600;
var height = 200;
const Project = () => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex className="projects" gap={"large"} vertical align="left">
        <h1>Projects</h1>
        <Flex className="flex" horizontal gap={"large"}>
          <Card
            className="card"
            sx={{
              maxWidth: { width },
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={height}
                image={require("../assets/business.png")}
                alt="business website"
                onClick={() =>
                  window.open(
                    "https://business-website-psi.vercel.app/",
                    "_blank"
                  )
                }
              />
              <CardContent>
                <Typography className="text" variant="body2" color="white">
                  A website made for subscription based business services. Coded
                  in HTML and CSS.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                target="_blank"
                href="https://github.com/omaralfawareh/BusinessWebsite"
                className="button"
                size="small"
                color="primary"
              >
                <GithubFilled className="icons" />
                Github
              </Button>
            </CardActions>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: { width },
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={height}
                image={require("../assets/seminar.png")}
                alt="business website"
                onClick={() =>
                  window.open(
                    "https://seminar-website-phi.vercel.app/",
                    "_blank"
                  )
                }
              />
              <CardContent>
                <Typography className="text" variant="body2" color="white">
                  A responsive website representing and describing a seminar
                  held by a company.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                target="_blank"
                href="https://github.com/omaralfawareh/SeminarWebsite"
                className="button"
                size="small"
                color="primary"
              >
                <GithubFilled className="icons" />
                Github
              </Button>
            </CardActions>
          </Card>
        </Flex>
        <Flex className="flex" horizontal gap={"large"}>
          <Card
            className="card"
            sx={{
              maxWidth: { width },
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={height}
                image={require("../assets/unityGame.png")}
                alt="business website"
                onClick={() =>
                  window.open(
                    "https://github.com/omaralfawareh/DeliveryDash",
                    "_blank"
                  )
                }
              />
              <CardContent>
                <Typography className="text" variant="body2" color="white">
                  "Delivery Dash" is a 2D delivery game developed in Unity using
                  C#.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                target="_blank"
                href="https://github.com/omaralfawareh/DeliveryDash"
                className="button"
                size="small"
                color="primary"
              >
                <GithubFilled className="icons" />
                Github
              </Button>
            </CardActions>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: { width },
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={height}
                image={require("../assets/login1.png")}
                alt="business website"
                onClick={() =>
                  window.open("https://login-app-ashy.vercel.app/", "_blank")
                }
              />
              <CardContent>
                <Typography className="text" variant="body2" color="white">
                  Login Page made in React Js connected with Firebase.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                target="_blank"
                href="https://github.com/omaralfawareh/Login-App"
                className="button"
                size="small"
                color="primary"
              >
                <GithubFilled className="icons" />
                Github
              </Button>
            </CardActions>
          </Card>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Project;
