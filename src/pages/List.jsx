import React from "react";
import { LangContext } from "../context/lang-context";
import { useContext } from "react";

const List = ({ users }) => {
  const user = useContext(LangContext);
  return (
    <div className="list-container">
      {users.map((item) => {
        return (
          <div className="user-information" key={item.id}>
            <img src={item.avatar_url} width="100" height="100" />
            <div className="user-data">
              <p>Login: {item.login}</p>
              <p>id: {item.id}</p>
              <a href={item.html_url}>
                <button>Follow</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
