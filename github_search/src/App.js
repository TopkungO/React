import "./App.css";

import { connect } from "react-redux";
import { thunk_action_creator } from "./actions/fetchAction";
import UserInfo from "./UserInfo";

function App(props) {
  let getUsername;
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = getUsername.value;
    props.dispatch(thunk_action_creator(username));
    getUsername.value = "";
  };
  console.log(props.data);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title"> Enter the Gitgun Username</h2>
        <input
          type="text"
          placeholder="Enter Github Username"
          required
          ref={(input) => (getUsername = input)}
        />
        <button className="button"> submit</button>
      </form>
      {props.data.isFetching ? <h3>Loading....</h3> : null}
      {props.data.isError ? (
        <h3 className="error">No Such user exists.</h3>
      ) : null}
      {Object.keys(props.data.userData).length > 0 ? (
        <UserInfo user={props.data.userData} />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(App);
