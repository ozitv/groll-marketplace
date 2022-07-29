import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import { Twelve, TabFont } from "../StyledComponents/Text";

function valuetext(value) {
  return `${value}°C`;
}

const Boxer = styled(Box)`
  border: white;
  text-align: left;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2%;
    margin-right:3rem;
    width:100%;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function PriceSelector() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Boxer sx={{ width: 300 }}>
      <Twelve>Price Range</Twelve>
      <Box width={300}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Flex>
          <TabFont>0.01 GULF</TabFont>
          <TabFont>10 GULF</TabFont>
        </Flex>
      </Box>
    </Boxer>
  );
}
