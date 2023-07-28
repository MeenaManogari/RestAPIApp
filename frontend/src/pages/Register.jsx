import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, password, confirmpassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <p>...Loading</p>;
  }
  return (
    <>
      <div className="reg_head">
        <h2>
          <FaUser />
          Register
        </h2>
        <p>Please create an account</p>
      </div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form_group">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form_group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form_group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form_group">
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              placeholder="Re-enter Password"
              onChange={onChange}
            />
          </div>
          <div className="form_group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
