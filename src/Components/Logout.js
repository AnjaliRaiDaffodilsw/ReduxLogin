import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  

  const logout = (event) => {
    // event.preventDefault();
    dispatch(logout());
  };

  return (
    <form className="logout">
      <h1>
        Welcome <span className="user__name">{user.name}</span>!
        <hr/>
        <br/>
        Your Details are - 
      </h1>
     <br/>
     <table>
  <tr>
    <th>email</th> &nbsp; &nbsp; &nbsp; &nbsp;
    <th>position</th>&nbsp; &nbsp; &nbsp; &nbsp;
    <th>password</th>&nbsp; &nbsp; &nbsp; &nbsp;
  </tr>
  <br/>
  <tr>
    <td>{user.email}</td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>{user.position}</td>&nbsp; &nbsp; &nbsp; &nbsp;
    <td>{user.password}</td>
  </tr>
</table>
      <button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;