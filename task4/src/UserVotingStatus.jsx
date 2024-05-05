import React from "react";

const UserVotingStatus = ({ age }) => {
  return (
    <div>
      {age >= 18 ? (
        <h2 style={{color:'green'}}> You Can vote now </h2>
      ) : (
        <h2 style={{color:'red'}}>Your age is below 18. You can't vote now.</h2>
      )}
    </div>
  );
};

export default UserVotingStatus;
