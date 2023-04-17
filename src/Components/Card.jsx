import React, { useState } from "react";
import Modal from "./Modal";
import "./Card.css";

function Card({ book }) {
  const [modal, setModal] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        let image =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (image != undefined) {
          return (
            <>
              <div className="card" onClick={() => {setModal(true);setItem(item)}}>
                <img
                  src={image}
                  alt="Kitap Kapak Resmi"
                  className="card-image"
                />
                <div className="card-bottom">
                  <h3 className="card-title">{item.volumeInfo.title}</h3>
                  <p className="card-amount">
                    {item.volumeInfo.authors &&
                      item.volumeInfo.authors.map((author, index) => (
                        <React.Fragment key={index}>
                          {author}
                          {index !== item.volumeInfo.authors.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                  </p>
                </div>
              </div>
              <Modal modal={modal} item={bookItem} onClose={() => setModal(false)}></Modal>
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
