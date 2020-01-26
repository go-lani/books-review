import React from "react";
import styled from "styled-components";
import A11yTitle from "../components/A11yTitle";

const StyledContainer = styled.section`
  padding: 60px 0 0;
`;

const Container = props => {
  return (
    <StyledContainer>
      <A11yTitle>{props.area}</A11yTitle>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
