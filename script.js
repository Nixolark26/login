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

  const usernameElement = $("#username");
  const passwordElement = $("#password");
  const newUsernameElement = $("#register-username");
  const newPasswordElement = $("#register-password");
  const confirmPasswordElement = $("#register-confirm-password");

  usernameElement.on("focus", () => {
    usernameElement.removeClass("error-login");
  });
  passwordElement.on("focus", () => {
    passwordElement.removeClass("error-login");
  });
  newUsernameElement.on("focus", () => {
    newUsernameElement.removeClass("error-login");
  });
  newPasswordElement.on("focus", () => {
    newPasswordElement.removeClass("error-login");
  });
  confirmPasswordElement.on("focus", () => {
    confirmPasswordElement.removeClass("error-login");
  });

  $(".login-btn").on("click", () => {
    const usernameText = usernameElement.val();
    const passwordText = passwordElement.val();

    if (!usernameText && !passwordText) {
      usernameElement.addClass("error-login");
      passwordElement.addClass("error-login");
    } else if (!usernameText) {
      usernameElement.addClass("error-login");
    } else if (!passwordText) {
      passwordElement.addClass("error-login");
    }

    logIn(usernameText, passwordText);
  });

  $(".register-btn").on("click", () => {
    $(".register-form").css({ display: "flex" });
  });
  $(".cancel-account-btn").on("click", () => {
    $(".register-form").css({ display: "none" });
  });

  $(".create-account-btn").on("click", () => {
    if (
      (newPasswordElement.val() && newPasswordElement.val()) !==
      (confirmPasswordElement.val() && confirmPasswordElement.val())
    ) {
      console.log("Passwords do not match!");
      confirmPasswordElement.addClass("error-login");
      newPasswordElement.addClass("error-login");
      return;
    } else if (
      !newPasswordElement.val() &&
      !confirmPasswordElement.val() &&
      !newUsernameElement.val()
    ) {
      newPasswordElement.addClass("error-login");
      confirmPasswordElement.addClass("error-login");
      newUsernameElement.addClass("error-login");
      return;
    } else if (!newPasswordElement.val() && !confirmPasswordElement.val()) {
      newPasswordElement.addClass("error-login");
      confirmPasswordElement.addClass("error-login");
      return;
    } else if (!newPasswordElement.val()) {
      newPasswordElement.addClass("error-login");
      return;
    } else if (!confirmPasswordElement.val()) {
      confirmPasswordElement.addClass("error-login");
      return;
    } else if (!newUsernameElement.val()) {
      console.log("Please enter a valid Username");
      newUsernameElement.addClass("error-login");
      return;
    }
    signUp(
      newUsernameElement.val(),
      newPasswordElement.val(),
      newUsernameElement
    );
  });
});

function logIn(username, password) {
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

function signUp(newUsername, newPassword, newUsernameElement) {
  const existentUser = users.find((user) => user.username === newUsername);
  console.log(newPassword);
  if (existentUser) {
    console.log("Try another username");
    newUsernameElement.addClass("error-login");
  } else {
    const newUser = {
      id: Date.now(),
      username: newUsername,
      password: newPassword,
    };
    users.push(newUser);
    console.log(`Account created for ${newUser.username}`);
    $(".register-form").css({ display: "none" });
  }
}
