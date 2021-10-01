import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Route,
  NavLink,
  useRouteMatch
} from 'react-router-dom';


function Articles() {
  const [articles, setArticles] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:8080/api/articles'
      ).then((results) => {
        console.log(results)
        console.log(results.data)
        setArticles(results.data)
      })
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Articles List</h2>
      <ul>
        {articles.map((article:any) => (
          <li key={article.article_id}>
            <NavLink
              to={{
                pathname: `${url}/${article.article_id}`,
                state: article
              }}
            >
              {article.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
