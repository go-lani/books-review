import React from "react";
import styled from "styled-components";
import A11yTitle from "../components/Common/A11yTitle";

const StyledMainLayout = styled.section`
  padding: 60px 30px 30px;
`;

const MainLayout = props => {
  return (
    <StyledMainLayout>
      <A11yTitle>{props.sectionName}</A11yTitle>
      {props.children}
    </StyledMainLayout>
  );
};

export default MainLayout;
