import styled from "styled-components";
import media from "../../libs/MediaQuery";

export const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 50%;
  padding: 40px;
  background: url("/books_bg.gif") no-repeat center center / cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
  }

  ${media.mobile`
    width: 100%;
    min-height: 220px;
  justify-content: space-evenly;
  `};
`;

export const Title = styled.p`
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-size: 2.0rem;
  line-height: 1.5;
  color: #fff;
  text-align: left;


  ${media.mobile`
    .br {
      display: none;
    }
  `}

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.desktop`
    font-size: 2.8rem;
  `}
`;

export const Description = styled(Title)`
  font-weight: 400;
  text-align: center;

  ${media.mobile`
    font-size: 1.6rem;
    text-align: left;
  `}

  ${media.tablet`
    font-size: 1.4rem;
  `}

  ${media.desktop`
    font-size: 1.4rem;
  `}
`;
