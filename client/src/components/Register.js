import React, { Component } from "react";
import axios from 'axios';

class Register extends Component {
  render() {

    const {name, email, password, password2} = formData;

    const onChange= e =>
      setFormData({...formData, [e.target.name]: e.target.value});

      const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
          console.log('Passwords do not match');
        } else {
          const newUser = {
            name,
            email,
            password
          }

          try {
            const config = {
              headers: {
                'Content-Type': application/json'
              }
            }
            const body = JSON.stringify(newUser);

            const res = await axios.post('api/users', body, config);
            console.log(res.data);
          } catch(err) {
            console.error(err.response.data);
          }
        }
    return (
      <div className="registration">
        <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div >
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
           We will upload default picture for you
          </small>
        </div>
        <div >
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div >
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p >
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </div>
    );
  }
}
export default Register;
