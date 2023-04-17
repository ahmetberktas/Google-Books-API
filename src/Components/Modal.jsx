import React from "react";
import "./Modal.css";

function Modal({ modal, item, onClose }) {
  if (!modal) {
    return null;
  }
  let image =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="inner-box">
          <img src={image} alt="" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>
              {item.volumeInfo.authors &&
                item.volumeInfo.authors.map((author, index) => (
                  <React.Fragment key={index}>
                    {author}
                    {index !== item.volumeInfo.authors.length - 1 && ", "}
                  </React.Fragment>
                ))}
            </h3>
            <h4>
              {item.volumeInfo.publisher} -{" "}
              {new Date(item.volumeInfo.publishedDate).toLocaleDateString(
                "tr-TR"
              )}
            </h4>
            <br />
          </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
      </div>
    </div>
  );
}

export default Modal;
