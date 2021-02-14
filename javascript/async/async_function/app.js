const validateLogin = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (username !== "nhanlx") throw "Invalid username";
  if (password !== "pAsswOrd") throw "Invalid password";

  return "Welcome, nhan dep trai";
};

async function testLogin(username, password) {
  /*   validateLogin(username, password)
  .then((response) => {
    console.log("Login successfully");
    console.log(response);
  })
  .catch((error) => {
    console.log("Something went wrong");
    console.log(error);
  }); */
  // Using the above code will print "login successfully" first

  // By using the await keyword,
  // we make it wait for the function to be resolved
  // Which means, "login successfully" will be printed lastly
  try {
    let response = await validateLogin(username, password);
    console.log("Login successfully");
    console.log(response);
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}

// test missing credentials
testLogin();
testLogin("username");

// test invalid username
testLogin("username", "password");

// test invalid password
testLogin("nhanlx", "password");

// test login successfully
testLogin("nhanlx", "pAsswOrd");
