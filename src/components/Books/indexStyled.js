import styled from "styled-components";
import media from "../../libs/MediaQuery";

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 0 -5%;

  ${media.mobile`
    justify-content: center;
  `}
`;
