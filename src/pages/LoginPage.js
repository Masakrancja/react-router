import React from "react";
const LoginPage = (props) => {
  console.log(props);
  return (
    <>
      <label htmlFor="">
        Podaj login: <input type="text"></input>
      </label>
      <label htmlFor="">
        Podaj hasło: <input type="password"></input>
      </label>
      <button>Zaloguj</button>
    </>
  );
};

export default LoginPage;
