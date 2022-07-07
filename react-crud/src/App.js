import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/boards" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/boards"} className="nav-link">
                Boards
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/boards"]} component={BoardsList} />
            <Route exact path="/add" component={AddBoard} />
            <Route path="/boards/:id" component={Board} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
