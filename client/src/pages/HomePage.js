import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Shared/Spinner";

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);

  // Show an alert when there's an error
  if (error) {
    alert(error);
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Home Page</h1>
        </>
      )}
    </div>
  );
};

export default HomePage;
