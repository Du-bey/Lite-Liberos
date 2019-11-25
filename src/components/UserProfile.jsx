import React from "react";
import "../styles/bootstrap.min.css";
import "./UserProfileStyle.css";
import TopNav from "./TopNav";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Ritwik",
      email: "sharmaritwik98@gmail.com",
      contact: "7997000168",
      address: "S047",
      city: "2017A7PS0242H",
      toggle: "open",
      uid: this.props.match.params.id
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (this.state.toggle === "open") {
      this.setState({
        toggle: "close"
      });
    } else if (this.state.toggle === "close") {
      this.setState({
        toggle: "open"
      });
    }
  }

  render() {
    const notedit = (
      <div className="form-container-pavbhaji">
        <h1 align="center">Account Details</h1>
        <p>Username: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.username}
          disabled
        />
        <p>E-mail Id: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.email}
          disabled
        />
        <p>Address: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.address}
          disabled
        />
        <p>ID Number: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.city}
          disabled
        />
        <p>Contact number: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.contact}
          disabled
        />
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary mybtn"
            onClick={this.handleChange}
          >
            Edit
          </button>
        </div>
      </div>
    );
    const edit = (
      <div className="form-container-pavbhaji">
        <h1 align="center">Account Details</h1>
        <p>Username: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.username}
        />
        <p>E-mail Id: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.email}
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <p>Address: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.address}
          onChange={e => {
            this.setState({ address: e.target.value });
          }}
        />
        <p>ID Number: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.city}
        />
        <p>Contact number: </p>
        <input
          className="textBox"
          type="text"
          name="Name"
          value={this.state.contact}
          onChange={e => {
            this.setState({ contact: e.target.value });
          }}
        />
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary mybtn"
            onClick={this.handleChange}
          >
            Save
          </button>
        </div>
      </div>
    );
    return (
      <div>
        <TopNav />
        {this.state.toggle === "open" ? notedit : edit}
      </div>
    );
  }
}

export default UserProfile;
