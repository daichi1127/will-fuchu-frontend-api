import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Route,
  NavLink,
  useRouteMatch
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Card, CardHeader, Avatar } from "@material-ui/core";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:8080/api/articles'
      ).then((results) => {
        setArticles(results.data)
      })
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Articles List</h2>
      <Grid container>
        {articles.map((article:any) => (
          <Grid item xs={4} key={article.article_id}>
            <Card>
              <NavLink to={{pathname: `${url}/${article.article_id}`, state: article}}>
                {article.content}
              </NavLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Articles;
