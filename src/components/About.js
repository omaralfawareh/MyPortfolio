import React from "react";
import { Flex, Timeline } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import resume from "../assets/Resume.pdf";
import { motion } from "framer-motion";
import SkillCarousel from "./SkillCarousel";
function About() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex className="about" vertical align="left">
        <h1 className="label">About me</h1>
        <h2 className="label">Omar Alfawareh</h2>
        <p className="label">Software Engineer</p>
        <hr />
        <p>
          Hi, my name is Omar Alfawareh, and I am a software engineering student
          with a passion for web development and 2D game design. With a rich
          background in creating dynamic and user-friendly websites, I have
          honed my skills in both front-end and back-end technologies.
        </p>
        <p>
          My journey in software engineering is driven by an insatiable
          curiosity to explore new technologies and push the boundaries of
          digital innovation.
        </p>
        <hr />
        <ul className="list">
          <li>
            <Flex
              className="listFlex"
              gap={"large"}
              align="center"
              justify="start"
            >
              <span className="label">Birthday :</span>
              <span>17/04/2002</span>
            </Flex>
          </li>
          <li>
            <Flex
              className="listFlex"
              gap={"large"}
              align="center"
              justify="start"
            >
              <span className="label">Age :</span>
              <span>21</span>
            </Flex>
          </li>
          <li>
            <Flex
              className="listFlex"
              gap={"large"}
              align="center"
              justify="start"
            >
              <span className="label">Address :</span>
              <span>Amman, Jordan</span>
            </Flex>
          </li>
          <li>
            <Flex
              className="listFlex"
              gap={"large"}
              align="center"
              justify="start"
            >
              <span className="label">Email :</span>
              <span>
                <a href="mailto:alfawareho@gmail.com">alfawareho@gmail.com</a>
              </span>
            </Flex>
          </li>
          <li>
            <Flex
              className="listFlex"
              gap={"large"}
              align="center"
              justify="start"
            >
              <span className="label">Phone :</span>
              <span>
                <a href="tel:+962791141046">+962791141046</a>
              </span>
            </Flex>
          </li>
        </ul>
        <Button
          startIcon={<DownloadOutlined />}
          variant="contained"
          href={resume}
          download={"Resume"}
          className="button"
        >
          <span>Download CV</span>
        </Button>
        <h2 className="label">Skills</h2>
        <hr />
        <SkillCarousel />
        <hr />
        <Flex justify="space-around"></Flex>
        <Flex className="timelineContainer" justify="space-between">
          <Flex vertical>
            <h2 className="label">Education</h2>
            <Timeline
              className="timeline"
              items={[
                {
                  children: (
                    <Flex vertical>
                      <p className="label">
                        Princess Sumaya University for Technology
                      </p>{" "}
                      <span>Software Engineering</span>
                    </Flex>
                  ),
                  color: "black",
                },
                {
                  children: (
                    <Flex vertical>
                      <p className="label">Al-Ittihad International Schools</p>{" "}
                      <span>Student</span>
                    </Flex>
                  ),
                  color: "black",
                },
              ]}
            />
          </Flex>
          <Flex vertical>
            <h2 className="label">Experience</h2>
            <Timeline
              className="timeline"
              items={[
                {
                  children: (
                    <Flex vertical>
                      <p className="label">Eduhax</p>{" "}
                      <span>Web Developer Intern</span>
                    </Flex>
                  ),
                  color: "black",
                },
                {
                  children: (
                    <Flex vertical>
                      <p className="label">Orange Jordan</p>{" "}
                      <span>Full-Stack Developer Intern</span>
                    </Flex>
                  ),
                  color: "black",
                },
              ]}
            />
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default About;
