import React from "react";
import { IntroArea, Title, Description } from "./SigninIntroStyled";

const SigninIntro = () => {
  return (
    <IntroArea>
      <Title>
        Publee's <br className="br" />
        Review Service <br className="br" />
        For Books
      </Title>
      <Description>
        Please share your opinion on Web Development Books.
      </Description>
    </IntroArea>
  );
};

export default SigninIntro;
