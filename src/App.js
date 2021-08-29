import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Form from "./components/Form";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
