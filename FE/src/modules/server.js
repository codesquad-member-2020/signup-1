const fetch = require("node-fetch");

const URL = "https://test-codesquad-team1-sign-up.herokuapp.com/";

export default {
  checkDuplicate: value => {
    fetch(`${URL}users/duplicate/id/${value}`, {
      mode: "no-cors",
    })
      .then(response => response.json())
      .then(json => console.log(json));
  },
  send: userData => {
    fetch(`${URL}api/users/create`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  },
};
