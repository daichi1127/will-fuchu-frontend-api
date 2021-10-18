import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { 
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

// import {ProfileCard} from '../../molecules/ProfileCard';


export const Users = () => {
  const [users, setUsers] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:8080/api/users'
      ).then((results) => {
        console.log(results.data);
        setUsers(results.data)
      })
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <Grid container spacing={3}>
        {users.map((user:any) => (
          <Grid item xs={4} key={user.user_id}>
            <NavLink to={{pathname: `${url}/${user.user_id}`, state: user}}>
              <Card>
                <CardHeader avatar={<Avatar src="/icon.jpeg"/>} title={user.user_name} subheader="age"/>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <RoomIcon />
                      </ListItemIcon>
                      <ListItemText primary={user.country_id} secondary="出身地" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemIcon>
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary={user.birth_day} secondary="birth date" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemIcon>
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary={user.room_num} secondary="room" />
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
