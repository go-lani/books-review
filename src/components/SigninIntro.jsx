import React from "react";
import styled from "styled-components";
import media from "../libs/MediaQuery";

const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  padding: 40px;
  background: #1f6cc7;

  ${media.mobile`
    width: 100%;
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
  width: 100%;
  height: 100%;

  ${media.mobile`
    width: auto;
  `}
`;

const TextBlock = styled.div``;

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

const SigninIntro = () => {
  return (
    <IntroArea>
      <Title>
        Publee's <br className="br" />
        Review Service <br className="br" />
        For Books
      </Title>
      <ImageBlock>
        <Image src="/books_bg.gif" alt="signIn intro image" />
      </ImageBlock>
      <Description>
        Please share your opinion on Web Development Books.
      </Description>
    </IntroArea>
  );
};

export default SigninIntro;
