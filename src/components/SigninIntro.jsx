import React from "react";
import styled from "styled-components";
import media from "../libs/MediaQuery";

const IntroArea = styled.div`
  width: 100%;
  background: #1f6cc7;

  ${media.tablet`
    width: 50%;
  `}

  ${media.desktop`
    width: 50%;
  `}
`;

const ImageBlock = styled.div`
  text-align: center;
  ${media.mobile`
    height: 150px;
  `}
`;

const Image = styled.img`
  max-width: 100%;
  width: auto;
  height: 100%;

  ${media.tablet`
    width: 100%;
  `}

  ${media.desktop`
    width: 100%;
  `}
`;

const TextBlock = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
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

const Description = styled(Title)`
  font-weight: 400;
  line-height: 1.2;
  text-align: center;

  ${media.mobile`
    font-size: 1.4rem;
  `}

  ${media.tablet`
    font-size: 1.6rem;
  `}

  ${media.desktop`
    font-size: 1.8rem;
  `}
`;

const SigninIntro = props => {
  return (
    <IntroArea>
      <TextBlock>
        <Title>
          Publee's <br className="br" />
          Review Service <br className="br" />
          For Books
        </Title>
      </TextBlock>
      <ImageBlock>
        <Image src="/books_bg.gif" alt="sign in image" />
      </ImageBlock>
      <TextBlock>
        <Description>
          Please share your opinion on Web Development Books.
        </Description>
      </TextBlock>
    </IntroArea>
  );
};

export default SigninIntro;
