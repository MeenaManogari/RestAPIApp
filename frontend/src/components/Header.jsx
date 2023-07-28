import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="head_name">
      <h3>
        <Link to="/">GOAL SETTERS</Link>
      </h3>
      <nav>
        {user ? (
          <button onClick={onLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <FaSignInAlt />
              Login
            </Link>
            <Link to="/register">
              <FaUser />
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
