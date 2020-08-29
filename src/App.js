import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";

import Header from "./components/header/Header";

function App() {
  return (
    <div className='App'>

      <Header />
      {/* <Alert /> */}
      <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route exact path='/questions' component={QuestionsPage} />
          <Route exact path='/tags' component={TagsPage} />
          <Route exact path='/users' component={UsersPage} />
          <Route exact path='/jobs' component={HomePage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/questions/:id' component={Post} />
          <Route exact path='/users/:id' component={UserPage} />
          <Route exact path='/tags/:tagname' component={TagPage} />
          <Route exact path='/add/question' component={PostForm} />*/}
        </Switch>
    </div>
  );
}

export default App;
