import userData from "./userData.js";

const fetch = require("node-fetch");

const URL = "https://codesquad-team1-sign-up.herokuapp.com/api/";

export default {
  fetchData: value => {
    return fetch(`${URL}users/duplicate/userId/${value}`, {
      method: "GET",
      redirect: "follow",
    }).then(response => response.json());
  },
  send: () => {
    fetch(`${URL}api/users/create`, {
      method: "POST",
      body: userData,
      redirect: "follow",
    })
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  },
};
