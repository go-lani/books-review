import React from "react";
import styled from "styled-components";
import A11yTitle from "../components/common/A11yTitle";

const StyledContainer = styled.section`
  padding: 60px 30px 30px;
`;

const Container = props => {
  return (
    <StyledContainer>
      <A11yTitle>{props.sectionName}</A11yTitle>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
