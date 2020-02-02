import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import Buttons from "../Button";
import media from "../../libs/MediaQuery";
import { removeBook } from "../../actions";

const Li = styled.li`
  flex-basis: 20%;
  margin: 0 2% 5%;

  ${media.tablet`
    flex-basis: 30%;
    margin: 0 5% 5%;
  `}

  ${media.mobile`
    flex-basis: 80%;
    margin: 0 0 5%;
  `}
`;

const ImgBox = styled.div`
  position: relative;
  margin: 0 0 20px;
  padding: 100% 0 0;

  img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px #dedede;
  }
`;

const Title = styled.p`
  margin: 0 0 15px;
  font-size: 2rem;
  color: #222;
`;

const Author = styled.p`
  margin: 0 0 15px;
  font-size: 1.2rem;
  color: #585959;
`;

const Message = styled.p`
  margin: 0 0 20px;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #222;
  word-break: keep-all;
`;

const BookItem = ({ token, book, removeBook }) => {
  return (
    <Li>
      <ImgBox>
        <img src={book.url} alt={book.title} />
      </ImgBox>
      <Title>{book.title}</Title>
      <Author>저자 {book.author}</Author>
      <Message>{book.message}</Message>
      <Buttons
        size="small"
        color="pink"
        onClick={() => removeBook(token, book.bookId)}
      >
        Remove
      </Buttons>
    </Li>
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    removeBook: async (token, id) => {
      try {
        await axios.delete(`https://api.marktube.tv/v1/book/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(removeBook(id));
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(BookItem);
