import React from "react";
import "./login.css";
import { withRouter } from "react-router";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>Sign In</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input
            type="submit"
            value="Sign In"
            onClick={() => this.moveToHomepage()}
          />
        </form>
      </div>
    );
  }

  moveToHomepage() {
    this.props.changeIsLogedIn();
    this.props.history.push("/Home");
  }
}

export default withRouter(Login);
