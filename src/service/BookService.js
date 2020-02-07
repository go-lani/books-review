import axios from "axios";

const BOOK_API_URL = "https://api.marktube.tv/v1/book";

export default class BookService {
  static getBooks = async token => {
    return await axios.get(BOOK_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  static addBook = async (token, title, message, author, url) => {
    return await axios.post(
      BOOK_API_URL,
      {
        title,
        message,
        author,
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };
  static removeBook = async (token, id) => {
    return await axios.delete(`${BOOK_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
