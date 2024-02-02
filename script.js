const users = [
  { username: "Moisito", password: "Elcachero" },
  { username: "Franquito", password: "+3x2" },
  { username: "Nicolasito", password: "Tucachero" },
  { username: "Daioi", password: "Heilhitler" },
];

$(document).ready(() => {
  $("form").on("submit", (event) => {
    event.preventDefault();
  });

  $(".login-btn").on("click", () => {
    const username = $("#username").val();
    const password = $("#password").val();
    login(username, password);
  });
});

function login(username, password) {
  if (username && password) {
    let currentUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (currentUser) {
      $("#username").val("");
      $("#password").val("");
      console.log(`Hello ${currentUser.username}`);
    } else console.log("Failed login");
  } else {
    console.log("Please complete the fields");
  }
}
