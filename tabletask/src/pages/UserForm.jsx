import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserForm = ({ Data, setData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { idx } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = [...Data];
    const [mainProp, subProp] = name.split(".");

    if (subProp) {
      updatedData[idx][mainProp][subProp] = value;
    } else {
      updatedData[idx][name] = value;
    }
    setData(updatedData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", Data[idx]);
    navigate("/");
  };

  return (
    <div className="userform">
      <div className="container">
        <h1>User Information Form</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={Data[idx].id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={Data[idx].name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={Data[idx].username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={Data[idx].email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="suits">Suits</label>
            <input
              type="text"
              id="suits"
              name="address.suite"
              value={Data[idx].address.suite}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={Data[idx].phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={Data[idx].website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company.name"
              value={Data[idx].company.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
