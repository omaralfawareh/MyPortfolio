import React from "react";
import { Flex } from "antd";
import Button from "@mui/material/Button";

const Error = () => {
  return (
    <Flex
      className="error"
      vertical
      align="center"
      gap={"large"}
      justify="center"
    >
      <h2>Page Not Found</h2>
      <img style={{}} src={require("../assets/error.png")} alt="Error 404" />
      <Button variant="contained" href="/" className="button">
        <span>Go back home</span>
      </Button>
    </Flex>
  );
};

export default Error;
