import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { Flex } from "antd";

const SkillCarousel = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoCycle: true,
            cycleInterval: 2000,
            animationDuration: 1800,
            scrollOnDevice: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            autoCycle: true,
            cycleInterval: 2000,
            animationDuration: 1800,
            scrollOnDevice: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoCycle: true,
            cycleInterval: 2000,
            animationDuration: 1800,
            scrollOnDevice: false,
          },
        },
      ]}
      autoCycle={true}
      cycleInterval={2000}
      animationDuration={1800}
      arrows={false}
      dots={false}
      showSides={false}
      sidesOpacity={1}
      sideSize={1}
      slidesToScroll={1}
      slidesToShow={5}
    >
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="React.js"
          src={require("../assets/react.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="Java"
          src={require("../assets/java.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="C++"
          src={require("../assets/cpp.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="CSS"
          src={require("../assets/css.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="HTML"
          src={require("../assets/html.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="Python"
          src={require("../assets/python.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="C#"
          src={require("../assets/csharp.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="Unity"
          src={require("../assets/unity.png")}
        />
      </Flex>
      <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="Bootstrap"
          src={require("../assets/bootstrap.png")}
        />
      </Flex>
    </InfiniteCarousel>
  );
};

export default SkillCarousel;
