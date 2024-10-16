import React from "react";
import "./Blogitems.css";

const Blogitems = (props) => {
  const { id, title, imageUrl, avatarUrl, author, topic } = props.blogData; // Using destructuring
  return (
    <tr>
      <td>
        <img className="item-image" src={imageUrl} alt={`item-${id}`} />
      </td>
      <td>{title}</td>
      <td>{topic}</td>
      <td>
        <img className="avatar" src={avatarUrl} alt={`avatar-${id}`} />
      </td>
      <td>{author}</td>
    </tr>
  );
};

export default Blogitems;
