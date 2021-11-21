<template>
  <div id="main">
    <div class="login">
      <h3>Welcome to postIt!</h3>
      <br />
      <a href="">Create an Account</a><br />
      <p>Or</p>
      <h3>Please Log In</h3>
      <form>
        <input type="text" name="email" placeholder="Email" /><br />
        <input type="password" name="password" placeholder="Password" /><br />
        <!-- Submitting the login form on login.html should redirect to index.html -->
      </form>
      <a href="/posts">
        <input type="submit" value="Log In" /> </a
      ><br />
      <a id="forgot" href="">Forgot password?</a>
    </div>
  </div>
</template>
<style scoped>

#main {
  width: 100%;
  background-color: rgb(64, 118, 197);
  font-family: "Lato", sans-serif;
  text-align: left;
  font-size: 18px;

}

.login {
  background-color: white;
  width: 400px;
  margin: 0 auto 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h3 ~ form input {
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 16px;
}

.login > a input[type="submit"] {
  background-color: rgb(42, 42, 119);
  color: white;
  padding: 10px 20px;
}

.login > a:hover {
  color: rgb(62, 62, 226);
}

#forgot {
  margin-bottom: 20px;
}
</style>