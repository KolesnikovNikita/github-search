import React, { useContext } from "react";
import { getUserRepos } from "../api";
import { useParams } from "react-router-dom";
import { LangContext } from "../context/lang-context";
import "../App.css";

export default function User() {
  const conf = useContext(LangContext);
  let { repos } = useParams();

  const [response, setReposnse] = React.useState([]);

  React.useEffect(() => {
    getUserRepos(repos).then((response) => setReposnse(response));
  }, []);
  return (
    <div className="repos-style">
      {response.map((el) => {
        return (
          <ul className="repos-list" key={el.id}>
            <li>
              {conf.languageChanging.repo[conf.language].name}: {el.full_name}
            </li>
            <li>
              {conf.languageChanging.repo[conf.language].forks}:{el.forks_count}
            </li>
            <li>
              {conf.languageChanging.repo[conf.language].id}:
              {el.stargazers_count}
              id: {el.id}
            </li>
            <li>
              {conf.languageChanging.repo[conf.language].stargazers}:
              {el.stargazers_count}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
