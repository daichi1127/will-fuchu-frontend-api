import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import Home from './components/body/Home';
import About from './components/body/About';
import Contact from './components/body/Contact';
import Articles from './components/body/Articles';
import Article from './components/body/Article';
// import Articles from './components/body/Articles';

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/articles" component={Articles}/>
        <Route path="/articles/:id" component={Article}/>
        {/* <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
