import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Route,
  NavLink,
  useRouteMatch
} from 'react-router-dom';
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  ButtonBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import {
  DateRange as DateRangeIcon,
  Room as RoomIcon,
  Business as BusinessIcon,
} from "@material-ui/icons";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { path, url } = useRouteMatch();

  const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
      height: theme.spacing(10),
      width: theme.spacing(10),
    }
  }));
  const classes = useStyles();

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
      <Grid container spacing={3}>
        {articles.map((article:any) => (
          <Grid item xs={4} key={article.user_id}>
            <NavLink to={{pathname: `${url}/${article.article_id}`, state: article}}>
              <Card>
                <CardHeader title={article.content} />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <RoomIcon />
                      </ListItemIcon>
                      <ListItemText primary="tag" secondary="tag2" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Articles;
