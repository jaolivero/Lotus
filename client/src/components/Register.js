import React, { Component } from "react";
import { connect } from 'react-redux;'
import { Link, Redirect } from "react-router-dom";
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
import { Fragment } from "react";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

    const {name, email, password, password2} = formData;

    const onChange = (e) =>
      setFormData({...formData, [e.target.name]: e.target.value});

      const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
          //css has alert, alert-primary, alert-danger 
         setAlert('Passwords do not match', 'danger');
        } else { 
          register({ name, email, password });
          }
        };
    
        if(isAuthenticated) {
          return <Redirect to="/dashboard" />;
        }
        //   try {
        //     const config = {
        //       headers: {
        //         'Content-Type': 'application/json'
        //       }
        //     }
        //     const body = JSON.stringify(newUser);

        //     const res = await axios.post('api/users', body, config);
        //     console.log(res.data);
        //   } catch(err) {
        //     console.error(err.response.data);
        //   }
        // }
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  const mapStatetoProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStatetoProps, { setAlert, register })(Register);
