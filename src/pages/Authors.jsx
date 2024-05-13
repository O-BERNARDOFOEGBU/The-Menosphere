import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import Avatar5 from "../images/avatar5.jpg";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Bernard Ofoegbu", posts: 3 },
  { id: 2, avatar: Avatar2, name: "John Doe", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Samson Kratos", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Sussana Wuss", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Jordi Lawrence", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`}>
                <div className="author__avatar">
                  <img src={avatar} alt={`Representation of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2>No users/authors found.</h2>
      )}
    </section>
  );
};

export default Authors;
