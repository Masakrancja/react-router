import React from "react";
import "../styles/ContactPage.css";
class ContactPage extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="contact">
        <h3>Napisz do nas</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz cokolwiek..."
          />
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}
export default ContactPage;
