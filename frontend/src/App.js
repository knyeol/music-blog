import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import Navigation from "./components/Navigation";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/posts/" component={() => <Post />} />
        <Route path="/about/" component={() => <About />} />
      </Switch>
    </Router>
  );
}

export default App;
