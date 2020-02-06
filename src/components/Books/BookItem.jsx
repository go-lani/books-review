import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Buttons from "../common/Button";
import { Li, ImgBox, Title, Author, Message } from "./BookItemStyled";
import { removeBook } from "../../actions";

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
