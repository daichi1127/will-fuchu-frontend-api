import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from '../body/Home';
import About from '../body/About';
import Contact from '../body/Contact';
import Articles from '../body/Articles';
import Article from '../body/Article'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { makeStyles } from '@material-ui/styles';


export const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink exact to="/"><HomeRoundedIcon /></NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/about">About</NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/contact">Contact</NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/articles">Articles</NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/articles" component={Articles}/>
        <Route path="/articles/:id" component={Article}/>
      </Switch>
    </BrowserRouter>
  );
}
