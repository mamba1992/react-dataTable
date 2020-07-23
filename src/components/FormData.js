import React, { Component } from "react";
import axios from "axios";

export default class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      gender: "",
      email: "",
      formSubmitted: false,
    };
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post("/post", this.state)
      .then((response) =>
        this.setState({ formData: response.data.data, formSubmitted: true })
      )
      .catch((err) => {
        console.log(err);
      });
  };
  renderFormContent = () => {
    const {
      firstName,
      lastName,
      city,
      country,
      gender,
      email,
    } = this.state.formData;

    return (
      <div className="ui list">
        <div className="item">{firstName}</div>
        <div className="item">{lastName}</div>
        <div className="item">{city}</div>
        <div className="item">{country}</div>
        <div className="item">{gender}</div>
        <div className="item">{email}</div>
      </div>
    );
  };
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { firstName, lastName, city, country, gender, email } = this.state;
    if (!this.state.formSubmitted) {
      return (
        <form className="ui form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="City"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={country}
              placeholder="Country"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="field">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={gender}
              placeholder="Gender"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.onChangeHandler}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      );
    }
    return this.renderFormContent();
  }
}
